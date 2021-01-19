export default function initItemsController(db) {
  const index = async (request, response) => {
    try {
      const items = await db.Item.findAll();
      response.send({ items });
    } catch (error) {
      console.log(error);
    }
  };

  const create = async (request, response) => {
    try {
      console.log('request.body', request.body);

      const item = await db.Item.create(request.body);

      response.send({ item });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
    create,
  };
}
