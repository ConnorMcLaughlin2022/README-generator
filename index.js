const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = ({title, description,screenshot,installation,usage,credits,licensing,site,github}) => {
    return `=======
    # ${title} # README:
    
    image
    
    
    ## Description
    ${description}

    ## Screenshot
    ${screenshot}


    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## Credits
    ${credits}

    ## Licensing
    ${licensing}
        
    ## URL & Site
    site: ${site}
    URL: ${github}
   `
}

inquirer.prompt([   
{
    type:"input",
    message:"Title of project",
    name:"title",
},
{
    type:"input",
    message:"add the save file path of your project screenshot",
    name:"screenshot",
},
{
    type:"input",
    message:"write a descripting of the project",
    name:"description",
},
{
    type:"input",
    message:"what installation was used on the project?",
    name:"installation",
},
{
    type:"input",
    message:"what is the usage for the project?",
    name:"usage",
},
{
    type:"input",
    message:"what credits would you like to include?",
    name:"credits",
},
{
    type:"input",
    message:"any licening you woul like to add?",
    name:"licensing",
},
{
    type:"input",
    message:"what is the URL of the site?",
    name:"site",
},
{
    type:"input",
    message:"what is the URL of the github repository?",
    name:"github",
},
]).then((ans) => 
    fs.writeFile(`./output/${ans.title}.md`,generateReadme(ans), (err)=>
    err ? console.log(err) : console.log('working')
    )
);
