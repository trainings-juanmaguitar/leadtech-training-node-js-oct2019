console.log('It works!')

const buttons = document.getElementsByClassName('remove-task')

Array.from(buttons).forEach(function(button) {
  button.addEventListener('click', function()  {
    const {id} = this.dataset
    fetch('/task/' + id, {
      method: 'DELETE',
    })
    .then(res => res.text()) // or res.json()
    .then(res => {
      window.location = '/tasks'
    })
  });
});




