import clusteringChart from '../assets/project-clustering-chart.svg';
import nlpChart from '../assets/project-nlp-chart.svg';

function getProjectSourceText(project = {}) {
  return `${project.title || ''} ${project.description || ''}`.toLowerCase();
}

function isNlpProject(project = {}) {
  const source = getProjectSourceText(project);
  return source.includes('nlp') || source.includes('bencana') || source.includes('xlm-roberta');
}

function isClusteringProject(project = {}) {
  const source = getProjectSourceText(project);
  return source.includes('clustering') || source.includes('k-means') || source.includes('nba');
}

function getLocalPhotoFallback(project = {}) {
  const source = getProjectSourceText(project);

  if (source.includes('tmovie') || source.includes('web movie') || source.includes('movie catalog')) {
    return '/project-photos/web-movie.svg';
  }

  if (source.includes('clothing store') || source.includes('web shopping') || source.includes('e-commerce')) {
    return '/project-photos/shopping-react-api.svg';
  }

  if (source.includes('react native') || source.includes('hotel booking') || source.includes('android hotel')) {
    return '/project-photos/react-native-hotel.svg';
  }

  if (source.includes('covid news') || source.includes('web berita') || source.includes('news portal')) {
    return '/project-photos/covid-news-react-api.svg';
  }

  if (source.includes('web portfolio pribadi') || source.includes('portfolio pribadi') || source.includes('portfolio react')) {
    return '/project-photos/portfolio-react.svg';
  }

  return '';
}

export function resolveProjectImage(project = {}) {
  const directImage = project.image_url || project.image || '';
  if (directImage) {
    return directImage;
  }

  const localPhotoFallback = getLocalPhotoFallback(project);
  if (localPhotoFallback) {
    return localPhotoFallback;
  }

  if (isClusteringProject(project)) {
    return clusteringChart;
  }

  if (isNlpProject(project)) {
    return nlpChart;
  }

  return '';
}
