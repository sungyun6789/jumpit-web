import axios from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';

export interface PositionResponse {
  code: string;
  message: string;
  result: {
    alwaysOpen: boolean;
    applied: boolean;
    cacheCompanyImages: {
      imagePath: string;
      sortNumber: number;
    }[];
    celebration: number;
    closedAt: string;
    companyName: string;
    companyProfileId: number;
    companyUrl: string;
    developerInterviews: unknown[];
    developerInterviewsCount: number;
    draft: boolean;
    education: number;
    follow: boolean;
    graduate: boolean;
    id: number;
    itCompanyStory:
      | {
          category: string;
          classification: string;
          id: number;
          imagePath: string;
          link: string;
          memo: string;
          publish: boolean;
          title: string;
        }[]
      | [];
    jobPostingForSearchEngine: {
      url: string;
      title: string;
      employmentType: string[];
      experienceRequirements: string[];
      description: string;
      hiringOrganization: {
        name: string;
        logo: string;
        '@type': string;
      };
      identifier: {
        propertyID: string;
        value: string;
        '@type': string;
      };
      jobLocation: {
        address: {
          addressRegion: string;
          addressCountry: string;
          streetAddress: string;
          '@type': string;
        };
        '@type': string;
      };
      '@context': string;
      '@type': string;
      '@datePosted': string;
      '@validThrough': string;
    };
    location: null;
    logo: string;
    maxCareer: number;
    minCareer: number;
    newcomer: boolean;
    positionStatus: 'CHECKED';
    preferredRequirements: string;
    publishedAt: string;
    qualifications: string;
    recruitProcess: string;
    responsibility: string;
    scrap: boolean;
    serviceInfo: string;
    tags: {
      id: string;
      name: string;
      emoticon: string;
    }[];
    techStacks: {
      stack: string;
      imagePath: string;
    }[];
    title: string;
    welfares: string;
    workingPlaces: {
      address: string;
      isDomestic: boolean;
    }[];
  };
  status: number;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const { data } = await axios.get<PositionResponse>(`https://api.jumpit.co.kr/api/position/${req.query.id}`);
      return res.json(data);
    }
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

export default handler;
