const { mock } = require("../mock/user");
const {list} = require("../../functions/user");
describe("test", () => {
  it("list all users", async () => {
    console.log(mock);

    // jest.spyOn(list, "onScan").mockReturnValue({
    //   statusCode: 200,
    //   body: mock.users,
    // });

   list()

  });
});
