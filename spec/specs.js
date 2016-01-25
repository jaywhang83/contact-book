describe('Contact', function() {
  it("creates a new contact with the given specifications", function() {
    var testContact = new Contact("Dean","Winchester");
    expect(testContact.firstName).to.equal("Dean");
    expect(testContact.lastName).to.equal("Winchester");
    expect(testContact.addresses).to.eql([]);
  });
});
