import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          landing: {
            section: {
              1: {
                title: "CREATE. ANIMATE. PLAY.",
                subtitle: `VoxEditor is the first software that allows you to create your own voxel models, rig them and animate them in no time.`,
              },
              2: {
                title: "powerfull easy to use modeling tools",
                subtitle: `Make the most of your creativity with a robust set of tools.
                If you are an advanced 3D modeler or just starting out,
                with our super user-friendly interface you will creating
                amazing stuff right away.`,
                features: {
                  1: "All in one software with incredible performance",

                  2: "Windows and Mac supported",

                  3: "Amazing voxel creation tools",

                  4: "Emisive Wand. Make your work glow",

                  5: "Increase your voxels to get that level of detail",

                  6: "Work with a big Canvas",

                  7: "Mirror XYZ. Work less, we take care of the rest",

                  8: "Voxel, Quads and super fast Render view",

                  9: "Advanced Color Palette",

                  10: "Super friendly 3D enviroment to work",

                  11: "And much more",
                },
              },
              3: {
                title: "animate your creations",
                subtitle: `A game changer in the voxel world. With our own
                Skeleton System, VoxEditor allows you to rig and
                animate anything that you want using the timeline
                with a super easy to use keyframing mode.`,
                features: {
                  1: `Animation! Bring your creation to life`,
                  2: `Skeleton System`,
                  3: `Cut & Rig`,
                  4: `Powerful Timeline`,
                  5: `Curves`,
                  6: `Animations integrated in one file`,
                },
              },
            },
          },
          info: {
            feature: {
              title: "features",
            },
          },
          footer: {
            pages: {
              title: "PAGES",
              links: {
                editor: "Editor",
                create: "Create",
                game: "Game",
                news: "News",
                whitepaper: "Whitepaper",
                marketplace: "MarketPlace",
                about: "About",
                faq: "FAQ",
              },
            },
            social: {
              title: "SOCIAL",
            },
            copyright: `Copyright © 2012-2018, The Sandbox. All Rights Reserved.`,
          },
          header: {
            cto: "download",
          },
        },
      },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
