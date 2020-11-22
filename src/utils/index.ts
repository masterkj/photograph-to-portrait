import Vue from 'vue';

Vue.prototype.$textBrief = (text: string, words: number) => {
  let wordsArray: string[];
  wordsArray = text.split(/\s+/);
  const briefWords: string[] = wordsArray.slice(0, words);
  return briefWords.join(' ');
};
