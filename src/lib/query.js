import groq from "groq";

export const post = groq`
*[_type=="job"] | order(_id) [0...10] {
  _id,
    postedAt,
    contract,
    position,
    company,
    location,
    logo,
    logoBackgroundColor
}
`;
