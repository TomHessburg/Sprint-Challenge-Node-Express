const express = require('express');

const Project = require('../data/helpers/projectModel');

const router = express.Router();


router.get('/', (req, res) => {             //get all projects
    Project.get()
        .then(all => res.status(200).json(all))
        .catch(err => res.status(404).json(err))
});
router.get('/:id', (req, res) => {          //get specific project by id
    Project.get(req.params.id)
        .then(all => res.status(200).json(all))
        .catch(err => res.status(404).json(err))
});



router.get('/actions/:id', (req, res) => {          //gets specific projects actions at /actions/:id
    Project.getProjectActions(req.params.id)
        .then(actions => res.status(200).json(actions))
        .catch(err => res.status(500).json(err))
});



router.post("/", (req,res) => {             //posts a new project
    Project.insert(req.body)
        .then(newRes => res.status(201).json(newRes))
        .catch(err => res.status(500).json(err))
})

router.put("/:id", (req,res) => {           //update a project
    Project.update(req.params.id, req.body)
        .then(newRes => {
            if(newRes){
                res.status(201).json(newRes)
            }else{
                res.status(400).json({errMessage: "the project you tried to update dosnt exist"})
            }
        })
        .catch(err => res.status(500).json(err))
})

router.delete("/:id", (req,res) => {           //delete a project
    Project.remove(req.params.id)
        .then(r => res.status(200).json({message: "success deleting resource"}))
        .catch(err => res.status(500).json(err))
})

module.exports = router;
