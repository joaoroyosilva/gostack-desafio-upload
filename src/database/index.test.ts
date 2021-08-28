import * as index from "./index"
// @ponicode
describe("index.default", () => {
    test("0", async () => {
        await index.default("default")
    })

    test("1", async () => {
        await index.default("Jean-Philippe")
    })

    test("2", async () => {
        await index.default("Edmond")
    })

    test("3", async () => {
        await index.default("George")
    })

    test("4", async () => {
        await index.default("Anas")
    })

    test("5", async () => {
        await index.default("")
    })
})
