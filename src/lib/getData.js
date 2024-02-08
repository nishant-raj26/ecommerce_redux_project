export const getData = async (endPoint) => {
  try {
    const response = await fetch(endPoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};


// export async function getData(endpoint) {
//   try {
//     const response = await fetch(endpoint, {
//       cache: "no-store",
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }
