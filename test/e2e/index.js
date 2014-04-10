describe("angular concept home", function () {

  browser.get('http://localhost:11233');
      
  todoList = element.all(by.repeater('filter in filters'));

  it('should list todos', function() {
    expect(todoList.count()).toEqual(2);
  });

});
