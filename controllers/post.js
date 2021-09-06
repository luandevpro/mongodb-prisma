const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.createPost = async (req, res) => {
  const { slug, title, body, userId } = req.body;

  const post = await prisma.post.create({
    data: {
      slug,
      title,
      body,
      userId,
    },
    select: {
      slug: false,
      title: true,
      body: true,
      user: true,
    },
  });

  res.status(200).json(post);
};

exports.getPosts = async (req, res) => {
  const posts = await prisma.post.findMany({
    include: { user: true },
  });

  res.status(200).json(posts);
};

exports.getPost = async (req, res) => {
  const { postId } = req.params;

  const post = await prisma.post.findFirst({
    where: { id: postId },
    include: { user: true },
  });

  res.status(200).json(post);
};

exports.updatePost = async (req, res) => {
  const { postId } = req.params;
  const { title, body } = req.body;

  const postInfo = await prisma.post.update({
    where: { id: postId },
    data: {
      title,
      body,
    },
  });

  res.status(200).json(postInfo);
};

exports.deletePost = async (req, res) => {
  const { postId } = req.params;

  const postInfo = await prisma.post.delete({
    where: { id: postId },
  });

  res.status(200).json(postInfo);
};
