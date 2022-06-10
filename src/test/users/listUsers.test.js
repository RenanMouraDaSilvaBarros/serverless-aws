const { mock } = require("../mock/user");

const {
  listAllUsers,
} = require("../../functions/getUser/listAllUserCase/index");

const { dynamdbOnScan } = require("../../components/dynamodb/on_scan");

jest.mock("../../components/dynamodb/on_scan", () => ({
  ...jest.requireActual("../../components/dynamodb/on_scan"),
  dynamdbOnScan: jest.fn(),
}));

describe("users", () => {
  it("list all users", async () => {

    dynamdbOnScan.mockReturnValue(mock.users);

    const {statusCode, body} = await listAllUsers();

    expect(statusCode).toBe(200)
    expect(body).toEqual(JSON.stringify(mock.users))
  });
});
