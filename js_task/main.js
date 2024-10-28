var courseApi="http://localhost:3000/course"

function start(){
    getCourse(renderCourses)

    handleCreateForm();

}
start();

function getCourse(callback){
    fetch(courseApi)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

function creatCourse(data,callback){
    var option={
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi, option)
        .then(function(response){
            response.json();
        })
        .then(callback);
}
function deleteCourse(id){
    var option={
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json'
        }
    }
    fetch(courseApi +'/'+id, option)
        .then(function(response){
            response.json();
        })
        .then(function(){
            var courseItem=document.querySelector('.course-item-'+id);
            if(courseItem){
                courseItem.remove();
            }
        });
}
function putCourse(id){
    var option={
        method:'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi, option)
        .then(function(response){
            response.json();
        })
        .then(function(){

        });
}

function renderCourses(courses){
    var listCourseBlock= document.querySelector('#list_courses')
    var htmls=courses.map(function(course){
        return`
        <li class="course-item-${course.id}">
            <h4 class="nameCourse">${course.name}</h4>
            <p class="descriptionCourse">${course.description}</p>
            <button onclick="deleteCourse(${course.id})">Xóa</button>
            <button onclick="putCourse(${course.id})">Sửa</button>
        </li>    
        `;
    });
    listCourseBlock.innerHTML=htmls.join('');
}
function handleFixForm(){
    var fixBtn=document.querySelector('#fix');
    fixBtn.onclick=function(){
        var name=document.querySelector('')
    }
}
function handleCreateForm(){
    var createBtn=document.querySelector('#create');
    createBtn.onclick=function(){
        var name=document.querySelector('input[name="name"]').value;
        var description=document.querySelector('input[name="description"]').value;
        var formData={
            name:name,
            description:description
        }
        creatCourse(formData,function(){
            getCourse(renderCourses);
        })
    }
}


