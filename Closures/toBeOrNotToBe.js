var expect = function(val) {
    return {
        toBe: (val2) => {
            if (val !== val2) throw new Error("Not Equal");
            return true;
        },
        notToBe: (val2) => {
            if (val === val2) throw new Error("Equal2");
            return true;
        }
    }
};

try {
    const result1 = expect(5).toBe(5);
    console.log(result1); // {"value": true}
  } catch (error) {
    console.log({ error: error.message });
  }
