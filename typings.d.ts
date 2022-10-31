interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}

export interface Social extends SanityBody {
  _type: 'social';
  title: string;
  url: string;
}

export interface Project extends SanityBody {
  title: string;
  _type: 'project';
  image: Image;
  summary: string;
  gitHubLink: string;
  siteLink: string;
}

export interface Experience extends SanityBody {
  company: string;
  companyImage: Image;
  _type: 'experience';
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  dateEnded: string;
  dateStarted: string;
}
