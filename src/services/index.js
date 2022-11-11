const baseURL = "https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json"
export const get = async () => {
    try {
      const response = await fetch(`${baseURL}`);
      const data = await response.json()
      console.log(data)
      return data;

    } catch (error) {
      console.log("error", error);
    }
  };
  