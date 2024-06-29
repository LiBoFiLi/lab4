const { 
    valueTypeExample, 
    referenceTypeExample, 
    changePrimitive, 
    changeObject, 
    createHeapObject, 
    demonstrateGC, 
    checkGC 
} = require('../src/main');

describe('JavaScript Data Types and Garbage Collection', () => {
    test('Value types are passed by value', () => {
        let a = 10;
        let b = a;
        b = 20;
        expect(a).toBe(10);
    });

    test('Reference types are passed by reference', () => {
        let obj1 = { name: "Alice" };
        let obj2 = obj1;
        obj2.name = "Bob";
        expect(obj1.name).toBe("Bob");
    });

    test('ValueTypeExample should return original value', () => {
        expect(valueTypeExample()).toBe(10);
    });

    test('ReferenceTypeExample should return modified value', () => {
        expect(referenceTypeExample()).toBe("Bob");
    });

    test('ChangePrimitive should not affect original variable', () => {
        let x = 10;
        changePrimitive(x);
        expect(x).toBe(10);
    });

    test('ChangeObject should modify the original object', () => {
        let obj = { name: "Alice" };
        changeObject(obj);
        expect(obj.name).toBe("Charlie");
    });

    test('Garbage Collector works', () => {
        function createLargeObject() {
            let largeObject = { data: new Array(1000000).fill("x") };
            return largeObject;
        }

        function demonstrateGC() {
            let obj = createLargeObject();
            expect(obj).toBeDefined();
        }

        demonstrateGC();
    });

    test('CheckGC should complete without errors', () => {
        expect(checkGC()).toBeUndefined();
    });
});