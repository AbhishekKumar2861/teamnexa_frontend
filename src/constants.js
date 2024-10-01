const ADMIN_ROUTES_ARR = ["/parsing","/customer", "/task", "/members", "/team"];


export const USER_BASED_ROUTES = {
  admin: [...ADMIN_ROUTES_ARR, { path: "/customer" }],
};
