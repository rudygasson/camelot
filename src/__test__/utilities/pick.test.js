import pick from '../../utilities/pick';

describe("picks a subset of the source object as new object", () => {
    it("should return only the key-value pairs of the given keys", () => {
        let source = { a: "1", b: "2", c: "3" };
        let picked = ["a", "c"];

        expect(pick(source, picked)).toEqual({ a: "1", c: "3" })
    });
    
    it("should create an undefined value for missing source keys", () => {
        let source = { a: "1", b: "2" };
        let picked = [ "a", "c" ];

        expect(pick(source, picked)).toEqual({ a: "1", c: undefined });
    });
});