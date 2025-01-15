import sample from './sample';

const companyName = 'Noteline';
const appName = companyName;
const companyOneLiner = sample.text.sentence;
const companyDescription = sample.text.prose;

export const phones = {
  main: '(254) 123 456-789',
  marketing: '(678) 324 398-125',
};

export const emails = {
  info: process.env.NEXT_PUBLIC_EMAIL_INFO,
  noreply: process.env.NEXT_PUBLIC_EMAIL_NOREPLY,
  marketing: 'marketing@example.com',
};

export const socials = {
  twitter: {
    platform: `X`,
    link: '#twitter',
  },
  facebook: {
    platform: `Facebook`,
    link: '#facebook',
  },
  instagram: {
    platform: `Instagram`,
    link: '#instagram',
  },
  linkedin: {
    platform: `LinkedIn`,
    link: '#linkedin',
  },
  youtube: {
    platform: `Youtube`,
    link: '#youtube',
  },
};

export const hours = {
  days: 'Mon - Fri',
  times: '8 AM - 5 PM',
};

export const locations = {
  main: {
    location: 'London, UK',
    pin: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.6198681705!2d-0.43192806569539394!3d51.52860509063657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2ske!4v1736590642235!5m2!1sen!2ske',
  },
};

const appData = {
  companyOneLiner,
  companyDescription,

  name: { company: companyName, app: appName },
  phones,
  emails,
  socials,
  hours,
  locations,
};

export default appData;
