const supportedLanguages = [
  { lang: "en", default: true },
  { lang: "chSim", default: false },
  { lang: "chTra", default: false },
  { lang: "jap", default: false },
];
exports.onCreatePage = async ({
  page,
  actions: { createPage, deletePage },
}) => {
  await deletePage(page);

  supportedLanguages.map((langObj) => {
    const localizedPath = langObj.default
      ? page.path
      : `/${langObj.lang}${page.path}`;

    return createPage({
      ...page,
      path: localizedPath,

      context: {
        ...page.context,
        lang: langObj.lang,
      },
    });
  });
};
