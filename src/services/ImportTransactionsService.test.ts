import * as ImportTransactionsService from "./ImportTransactionsService"
// @ponicode
describe("execute", () => {
    let inst: any

    beforeEach(() => {
        inst = new ImportTransactionsService.default()
    })

    test("0", async () => {
        await inst.execute("/net/panel.dvi.crd")
    })

    test("1", async () => {
        await inst.execute("/etc/ppp/pre_emptive_manager.efif.bcpio")
    })

    test("2", async () => {
        await inst.execute("/var/up_pink.stl.atx")
    })

    test("3", async () => {
        await inst.execute("/tmp/payment_invoice.ogg.cmc")
    })

    test("4", async () => {
        await inst.execute("/usr/sbin/tan_district.geo.qxt")
    })

    test("5", async () => {
        await inst.execute("")
    })
})
