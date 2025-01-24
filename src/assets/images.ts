const baseUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images`;
const iconUrl = `https://img.icons8.com`;

export const images = {
  brand: {
    icon: {
      light: `${baseUrl}/brand/icon/light.png`,
      dark: `${baseUrl}/brand/icon/dark.png`,
    },
    logo: {
      light: `${baseUrl}/brand/logo/light.png`,
      dark: `${baseUrl}/brand/logo/dark.png`,
    },
  },

  icons: {
    social: {
      facebook: `${iconUrl}/?size=100&id=13912&format=png&color=000000`,
      instagram: `${iconUrl}/?size=100&id=32323&format=png&color=000000`,
      twitterx: `${iconUrl}/?size=100&id=ClbD5JTFM7FA&format=png&color=000000`,
      linkedin: `${iconUrl}/?size=100&id=13930&format=png&color=000000`,
      whatsapp: `${iconUrl}/?size=100&id=16713&format=png&color=000000`,
    },

    google: `${iconUrl}/?size=100&id=17949&format=png&color=000000`,
    credentials: `${iconUrl}/?size=100&id=jicLxt1sA2qa&format=png&color=000000`,

    store: {
      apple: '/icons/store/app-store.svg',
      google: '/icons/store/google-play.svg',
    },
  },

  backgrounds: {
    home: '/images/backgrounds/image-1.webp',
  },
};
