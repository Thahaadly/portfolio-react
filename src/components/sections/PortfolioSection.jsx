import { useState, useEffect, useRef } from "react";
import { FaGithub, FaLock, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { glassTheme as theme } from "../../utils/theme";
import { mockProjects } from "../../data";
import { resolveProjectImage } from "../../utils/projectImageResolver";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const filters = ["All", "Fullstack", "Frontend", "Mobile"];

  const filteredProjects = mockProjects.filter((project) => {
    if (activeFilter === "All") return true;
    const allText =
      `${project.tech_stack || project.technologies || ""} ${project.title || ""} ${project.short_description || ""} ${project.full_description || ""}`.toLowerCase();

    switch (activeFilter) {
      case "Mobile":
        return allText.includes("react native") || allText.includes("mobile");
      case "Frontend":
        return (
          allText.includes("react js") &&
          !allText.includes("laravel") &&
          !allText.includes("codeigniter")
        );
      case "Fullstack":
        return (
          allText.includes("laravel") ||
          allText.includes("codeigniter") ||
          allText.includes("fullstack")
        );
      default:
        return true;
    }
  });

  return (
    <section
      id="portfolio"
      className="w-full flex flex-col pb-24 md:pb-32 pt-0"
    >
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-4">
        {/* Header Monumental */}
        <div className="flex flex-col mb-12">
          <h2 className="text-[56px] md:text-[72px] leading-[0.95] tracking-[-1.5px] font-normal text-[#17171c] drop-shadow-none">
            Proyek
          </h2>
        </div>

        {/* Pill Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-12 pb-6 border-b border-[#e5e7eb]">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-[32px] text-[15px] font-bold transition-all duration-300
                                ${
                                  activeFilter === filter
                                    ? "bg-[#17171c] text-[#ffffff]"
                                    : "bg-transparent text-[#616161] hover:bg-[#ffffff]:bg-[#212121]"
                                }
                            `}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pb-8">
          {filteredProjects.map((project, index) => {
            const techList = project.tech_stack
              ? project.tech_stack.split(", ")
              : project.technologies
                ? project.technologies.split(", ")
                : [];
            const imagePath = resolveProjectImage(project);
            
            // Bento Grid Logic
            const pattern = index % 4;
            const isWide = pattern === 0 || pattern === 3;
            const bentoClass = isWide 
                ? "md:col-span-2 lg:col-span-2" 
                : "md:col-span-1 lg:col-span-1";
                
            return (
              <Card
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group relative flex flex-col rounded-[22px] cursor-pointer bg-[#ffffff] border-[#e5e7eb] shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-500 overflow-hidden animate-fade-in ${bentoClass}`}
                style={{
                  animationFillMode: "both",
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex flex-col h-full rounded-[22px]">
                  <FaCode className="absolute right-4 top-4 text-5xl text-[#ffffff] opacity-40 drop-shadow-sm z-10 pointer-events-none" />
                  <img
                    src={imagePath}
                    alt={project.title}
                    loading="lazy"
                    className={`w-full object-cover object-top transition duration-700 group-hover:scale-105 bg-[#f3f4f6] ${isWide ? 'h-64 sm:h-72 lg:h-[340px]' : 'h-56'}`}
                    onError={(e) => {
                      e.target.src =
                        "https://placehold.co/600x400/e2e8f0/475569?text=Preview+Belum+Tersedia";
                    }}
                  />

                  {/* Mini Phone Pop-up for Mobile Apps */}
                  {project.isMobile && (
                    <div className="absolute -top-16 right-4 w-32 h-[16rem] bg-[#17171c] rounded-[2rem] overflow-hidden shadow-2xl opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 pointer-events-none z-50 border-[6px] border-[#212121] rotate-12 group-hover:rotate-0 hidden md:block">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#212121] rounded-b-xl z-10"></div>
                      <img
                        src={imagePath}
                        alt="App Preview"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  )}

                  <div className="relative z-20 flex flex-col p-6 flex-grow bg-transparent border-t border-[#e5e7eb]">
                    <h3 className="text-xl font-bold text-[#17171c] transition group-hover:text-blue-600">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#616161]">
                      {project.short_description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {techList.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="rounded-md border border-[#e5e7eb] bg-[#f9fafb] px-2.5 py-1 text-[11px] font-bold text-[#616161]"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2 justify-end mt-auto pt-4">
                      {project.link_github || project.link !== "#" ? (
                        <a
                          href={project.link_github || project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className={`inline-flex items-center gap-1.5 rounded-[32px] px-4 py-2 text-xs font-bold ${theme.buttonSolid}`}
                        >
                          <FaGithub className="text-sm" /> GitHub
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-[32px] px-4 py-2 text-xs font-bold text-[#616161] bg-[#f3f4f6] cursor-not-allowed">
                          <FaLock className="text-[10px]" /> Internal
                        </span>
                      )}
                      {(project.link_demo || project.demo) && (
                        <a
                          href={project.link_demo || project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className={`inline-flex items-center gap-1.5 rounded-[32px] px-4 py-2 text-xs font-bold bg-[#17171c] text-[#ffffff] transition-opacity hover:opacity-90`}
                        >
                          <FaExternalLinkAlt className="text-[10px]" /> Live Web
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Modal Detail Project using Dialog Shadcn */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-[90vw] sm:max-w-3xl md:max-w-4xl lg:max-w-4xl max-h-[90vh] overflow-y-auto rounded-[22px] p-6 md:p-10 bg-[#ffffff] shadow-2xl flex flex-col border-none gap-0">
            {selectedProject && (
              <>
                <div className="sr-only">
                  <DialogTitle>{selectedProject.title}</DialogTitle>
                  <DialogDescription>{selectedProject.short_description}</DialogDescription>
                </div>
                
                {/* Hero Image (Top) */}
                <div className="w-full mt-2 mb-6">
                  <img
                    src={resolveProjectImage(selectedProject)}
                    alt={selectedProject.title}
                    className="w-full h-48 sm:h-64 md:h-80 lg:h-[400px] object-cover object-top rounded-2xl bg-[#f3f4f6] border border-[#e5e7eb] shadow-sm"
                  />
                </div>

                {/* Header Content */}
                <div className="w-full flex flex-col">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#17171c] mb-4 pr-10 leading-tight">
                    {selectedProject.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {(selectedProject.tech_stack
                      ? selectedProject.tech_stack.split(", ")
                      : selectedProject.technologies
                        ? selectedProject.technologies.split(", ")
                        : []
                    ).map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="rounded-md border border-[#e5e7eb] bg-[#f9fafb] px-3 py-1.5 text-[12px] font-bold text-[#616161]"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Case Study Content / Fallback Description */}
                  {selectedProject.problem && selectedProject.solution ? (
                    <div className="flex flex-col gap-8 mb-10">
                      <div>
                        <h4 className="text-[20px] font-bold text-[#17171c] mb-3 flex items-center gap-2">
                          <span className="text-xl">🛑</span> The Challenge
                        </h4>
                        <p className="text-[16px] text-[#616161] leading-relaxed whitespace-pre-wrap">
                          {selectedProject.problem}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-[20px] font-bold text-[#17171c] mb-3 flex items-center gap-2">
                          <span className="text-xl">💡</span> The Solution
                        </h4>
                        <p className="text-[16px] text-[#616161] leading-relaxed whitespace-pre-wrap">
                          {selectedProject.solution}
                        </p>
                      </div>
                      {selectedProject.features && selectedProject.features.length > 0 && (
                        <div>
                          <h4 className="text-[20px] font-bold text-[#17171c] mb-4 flex items-center gap-2">
                            <span className="text-xl">✨</span> Key Features
                          </h4>
                          <ul className="list-none space-y-3">
                            {selectedProject.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="text-[#17171c] mt-1 shrink-0 font-bold text-lg leading-none">✓</span>
                                <span className="text-[16px] text-[#616161] leading-relaxed">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="text-[16px] text-[#616161] mb-10 leading-relaxed whitespace-pre-wrap">
                      {selectedProject.full_description}
                    </p>
                  )}

                  {/* Footer CTA */}
                  <div className="flex flex-wrap gap-3 mt-auto border-t border-[#e5e7eb] pt-6">
                    {selectedProject.link_github ||
                    (selectedProject.link && selectedProject.link !== "#") ? (
                      <a
                        href={
                          selectedProject.link_github || selectedProject.link
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 rounded-[32px] px-6 py-3 text-sm font-bold ${theme.buttonSolid} flex-1 sm:flex-none`}
                      >
                        <FaGithub className="text-base" /> GitHub
                      </a>
                    ) : null}

                    {(selectedProject.link_demo || selectedProject.demo) && (
                      <a
                        href={selectedProject.link_demo || selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 rounded-[32px] px-6 py-3 text-sm font-bold bg-[#17171c] text-[#ffffff] transition-opacity hover:opacity-90 flex-1 sm:flex-none`}
                      >
                        <FaExternalLinkAlt className="text-base" /> Live Web
                      </a>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
