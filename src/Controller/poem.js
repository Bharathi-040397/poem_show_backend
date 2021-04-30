const Poem = require('../Models/poem');


const poemCtrl = {

	addPoem: async (req, res) => {
	
		const { inputtitle, inputcontent } = req.body
		const check = await Poem.findOne({ title: inputtitle })
		if (check) return res.status(400).json({ msg: `${check.title} மன்னிக்கவும்!!! இந்த தலைப்பு ஏற்கனவே உள்ளது` })
		const newPoem = new Poem({
			title: inputtitle,
			content: inputcontent,
		})
		newPoem.save()
			.then(poem => {
				return res.json({ poem, msg: `${poem.title} சேமிக்கப்பட்டது` })
				
			}).catch(err => {
				return res.status(201).json({ msg: err.message })
				
			})
		
	},

	getPoems: async (req, res) => {
		await Poem.find()
			.sort("-createdAt")
			.then(Poems => {
				return res.json({
					Poems
				})
			})
			.catch(err => {
				return res.status(201).json({ msg: err.message })
			})
		
	},
	getPoem: async (req, res) => {
		await Poem.findById(req.params.poemId)
			.then(poem => {
				return res.json({
					poem
				})
			})
			.catch(err => {
				return res.status(201).json({
					msg: err.message
				})
			})
	},

	editPoem: async (req, res) => {
		const { content } = req.body;
		console.log(req.params.Id);
		await Poem.updateOne({ _id: req.params.Id }, { $set: { content } },(err, data) => {
			if (err) {
				return res.status(201).json({
					msg: err.message
				})
			}
			else {
				return res.json({msg: "மாற்றப்பட்டது" })

			}
		}
		// }).then(poem => {
		// 	return	res.json({ poem,msg: "மாற்றப்பட்டது" })
			
		// }).catch(err => {
		// 	return res.status(201).json({
		// 		msg: err.message
		// 	})
		// })
			
		)},

		     
	
}

module.exports = poemCtrl