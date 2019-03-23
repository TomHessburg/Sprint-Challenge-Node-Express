const express = require('express');

const router = express.Router();

const Actions = require("../data/helpers/actionModel");

router.get('/', (req, res) => {             //get all actions
    Actions.get()
        .then(all => res.status(200).json(all))
        .catch(err => res.status(404).json(err))
});
router.get('/:id', (req, res) => {          //get specific actions by id
    Actions.get(req.params.id)
        .then(all => res.status(200).json(all))
        .catch(err => res.status(404).json(err))
});


router.post("/", (req,res) => {             //posts a new action
    Actions.insert(req.body)
        .then(newRes => res.status(201).json(newRes))
        .catch(err => res.status(500).json(err))
})

router.put("/:id", (req,res) => {           //update an action
    Actions.update(req.params.id, req.body)
        .then(newRes => {
            if(newRes){
                res.status(201).json(newRes)
            }else{
                res.status(400).json({errMessage: "the project you tried to update dosnt exist"})
            }
        })
        .catch(err => res.status(500).json(err))
})

router.delete("/:id", (req,res) => {           //delete an action
    Actions.remove(req.params.id)
        .then(r => res.status(200).json({message: "success deleting resource"}))
        .catch(err => res.status(500).json(err))
})





module.exports = router;