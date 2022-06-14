const Post = require('../models/Post')
const minifaker = require('minifaker')
require('minifaker/locales/en')

exports.create = async (req, res) => {
  let { total } = req.body
  let posts = []

  try {
    total = total * 1
    const postCollection = async () => {
      for (let i = 0; i < total; i++) {
        const randAvatarNum = Math.floor(Math.random() * 70) + 1
        const randImageNum = Math.floor(Math.random() * 70) + 1

        const post = new Post({
          username: minifaker.username(),
          avatar: `https://i.pravatar.cc/150?img=${randAvatarNum}`,
          image: `https://i.pravatar.cc/600?img=${randImageNum}`,
          title: `${minifaker.word()} ${minifaker.word()} ${minifaker.cityName()} ${minifaker.word()}`,
          caption: `${minifaker.word()} ${minifaker.word()} ${minifaker.cityName()}`,
          created_at: minifaker.date(),
        })
        posts.push(post)
      }
    }
    await postCollection()
    await Post.insertMany(posts)
    res.status(201).json({
      success: true,
      data: posts,
    })
  } catch (error) {
    res.status(400).json({
      error: `Error create posts: ${error.message}`,
    })
  }
}

exports.read = async (req, res) => {
  const skip = req.query.skip ? Number(req.query.skip) : 0
  const DEFAULT_LIMIT = 10

  try {
    const posts = await Post.find({}).skip(skip).limit(DEFAULT_LIMIT)

    res.status(200).json({
      status: 'sucess',
      data: posts,
    })
  } catch (error) {
    res.status(400).json({
      error: `Error getting posts: ${error.message}`,
    })
  }
}
