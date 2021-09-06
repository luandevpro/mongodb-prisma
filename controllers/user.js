const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.createUser = async (req, res) => {
  const { name, email } = req.body;

  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  res.status(200).json(user);
};

exports.getUsers = async (req, res) => {
  const users = await prisma.user.findMany();

  res.status(200).json(users);
};

exports.getUser = async (req, res) => {
  const { userId } = req.params;

  const users = await prisma.user.findFirst({
    where: { id: userId },
  });

  res.status(200).json(users);
};

exports.updateUser = async (req, res) => {
  const { userId } = req.params;
  const { name, email } = req.body;

  const userInfo = await prisma.user.update({
    where: { id: userId },
    data: {
      name,
      email,
    },
  });

  res.status(200).json(userInfo);
};

exports.deleteUser = async (req, res) => {
  const { userId } = req.params;

  const userInfo = await prisma.user.delete({
    where: { id: userId },
  });

  res.status(200).json(userInfo);
};
