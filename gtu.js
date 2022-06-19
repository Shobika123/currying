var itemList=document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'YELLOW';
console.log(itemList.parentElement.parentElement);
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='hello 1';
console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='hello 1';
console.log(itemList.nextSibiling);
console.log(itemList.nextElementSibiling);
console.log(itemList.previousSibiling);
console.log(itemList.previousElementSibiling);
var newDiv=document.createElement('div');
newDiv.className='yes';

newDiv.setAttribute('title','hello div');
console.log(newDiv);
var newDivText=document.createTextNode('hello world');
newDiv.appendChild('newDivText');
console.log(newDiv);
var newhead=document.createElement('Head');
newhead.setAttribute('title','hello');

var delete=document.createElement('button');
delete.className='btn btn-delete btm-sm-float-right delete';

function(filterItems(e))
{
    var text=e.target.value.toLowerCase();
    var items=itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item))
    {
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display='block';
        }
        else
        {
            item.style.display='none';
        }
    }

}
var form=document.querySelector('#my-form');
myform.addEventListener('submit',onSubmit);
function(onSubmit(e))
{
    e.preventDefault();
    localStorage.setItem('success');
}




