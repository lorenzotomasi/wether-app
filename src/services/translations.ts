interface TranslationsTypes {
}

class Translation {
  private translationObj: TranslationsTypes;
  private slug: string;
  private static instance: Translation;
  constructor(obj: TranslationsTypes, slug: string) {
    if (!Translation.instance) {
      Translation.instance = this;
    }
    this.translationObj = obj;
    this.slug = slug;
    return Translation.instance;
  }
  get t() {
    return this.translationObj;
  }

  get language() {
    return this.slug;
  }

  public updateTranslations(obj: TranslationsTypes, slug: string) {
    this.translationObj = obj;
    this.slug = slug;
  }
}

export type { TranslationsTypes };
export { Translation };
