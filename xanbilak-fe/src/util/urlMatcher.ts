// eslint-disable-next-line prefer-named-capture-group
const urlRegex = /(https?:\/\/[^\s]+)/ug;
export const linkify = (text: any): any[] => (text.match(urlRegex) || []);
