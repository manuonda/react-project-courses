describe('Todo app', () => {
  // beforeEach(() => {
  //   cy.clearLocalStorage();
  // });

  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('show a placeholder when no todos are found', () => {
     
     localStorage.setItem('todos','[]');
     cy.visit("/");
     cy.contains('No hay Notas');

  });
  it('show a todo for each todo in localStorage', () => {
    localStorage.setItem('todos','[]');
    const todos = [
      { id:1,
        title: 'title1',
        lastEdit: "10/10/2022",
        archived: true,
        content: 'Contenido numero 1',
        categories: ["category1"]
      }
    ];

      //alert(todos.length);
      localStorage.setItem("todos", JSON.stringify(todos));
      cy.visit("/")
       cy.get(`[data-testid="todo"]`).should("have.length",todos.length);
      //console.log(todo);
      //cy.contains('No hay Notas');

  })
})