const express = require('express')
const { Style } = require('./connection')

const app = express()
const port = 3000

const Styles = []

function getStyleById(id) {
  return Styles.find((item) => item.id === Number(id))
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/Styles', (req, res) => {
  Style.create({
    title: req.body.title
  }).then((Style) => {
    res.send({
      message: "Style has been created!",
      Style
    })
  }).catch(() => {
    res.send({
      message: "Style has not been created!",
    })
  })
})

app.get('/Styles', (req, res) => {
  Style.findAll().then((data) => res.send(data))
})

app.get('/Styles/:id', (req, res) => {
  const { id } = req.params

  Style.findByPk(id).then((Style) => {
    if (Style === null) {
      res.send({
        message: "Style has not been found!",
      })

      return
    }

    res.send(Style)
  })
})

app.put('/styles/:id', (req, res) => {
  const { id } = req.params
  const { title } = req.body

  Style.update({
    title
  }, {
    where: {
      id
    }
  }).then((result) => {
    if (result[0]) {
      res.send({
        message: "Style has been changed!",
        Style: result[1]
      })

      return
    }
    
    res.send({
      message: "Style has been not changed!",
    })
  })
})


app.delete('/Styles/:id', (req, res) => {
  const { id } = req.params

  Style.destroy({
    where: {
      id
    }
  }).then(() => {
    res.send({
      message: "Style has been deleted!"
    })
  })
})





const { Class } = require('./connection')

const Classes = []

function getClassById(id) {
  return Classes.find((item) => item.id === Number(id))
}


app.post('/Classes', (req, res) => {
  Class.create({
    title: req.body.title,
    teacher: req.body.teacher,
    start: req.body.start,
    end: req.body.end,
    timetable: req.body.timetable,
    level: req.body.level             //   недописувала style

  }).then((Class) => {
    res.send({
      message: "Class has been created!",
      Class
    })
  }).catch(() => {
    res.send({
      message: "Class has not been created!",
    })
  })
})

app.get('/Classes', (req, res) => {
  Class.findAll().then((data) => res.send(data))
})

app.get('/Classes/:id', (req, res) => {
  const { id } = req.params

  Class.findByPk(id).then((Class) => {
    if (Class === null) {
      res.send({
        message: "Style has not been found!",
      })

      return
    }

    res.send(Class)
  })
})

app.put('/Classes/:id', (req, res) => {
  const { id } = req.params
  const { title } = req.body
  const { teacher } = req.body
  const { start } = req.body
  const { end } = req.body
  const { timetable } = req.body
  const { level } = req.body

  Class.update({
    title,
    teacher,
    start,
    end,
    timetable,
    level
  }, {
    where: {
      id
    }
  }).then((result) => {
    if (result[0]) {
      res.send({
        message: "Class has been changed!",
        Class: result[1]
      })

      return
    }
    
    res.send({
      message: "Class has been not changed!",
    })
  })
})

app.delete('/Classes/:id', (req, res) => {
  const { id } = req.params

  Class.destroy({
    where: {
      id
    }
  }).then(() => {
    res.send({
      message: "Class has been deleted!"
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})