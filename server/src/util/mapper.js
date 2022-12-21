export const userMapper = (user) => {
  return {
    email: user.email,
    isActive: user.isActive,
    isVerified: user.isVerified,
    lastLoginDate: user.lastLoginDate,
    id: user._id,
  };
};
