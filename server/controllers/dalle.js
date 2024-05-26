export const getDalleView = async (req, res) => {
  try {
    res.status(200).send("Hello");
  } catch (error) {
    console.log(error);
  }
};
