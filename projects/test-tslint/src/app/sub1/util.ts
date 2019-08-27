export class TestClass {
  // Should use tslint.json in the same directory, which specifies double quotes,
  // but instead it falls back to the application's base-level tslint.json.
  value = "Test string";
}
