import { createRouter, createWebHistory } from 'vue-router'
import jwtDecode from 'jwt-decode'; // Import the jwt-decode library
import perm from '../stores/permissions'; // Import your store.js file
import store from '../stores/index'; // Import your store.js file


// Function to check authentication status
function checkAuthentication() {
  const token = localStorage.getItem('token'); // Get the token from local storage or wherever you store it

  if (!token) {
    // Token does not exist
    return false;
  }

  try {
    const decodedToken = jwtDecode(token);

    // Check if the token is expired
    const currentTime = Date.now() / 1000; // Convert current time to seconds
    if (decodedToken.exp < currentTime) {
      // Token has expired
      return false;
    }

    // Token is valid
    return true;
  } catch (error) {
    // Failed to decode the token, it may be invalid
    return false;
  }
}




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //dashboard
    {
      path: '/',
      name: "home",
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
      },
      component: () => import('../views/Dashboard.vue'),

    },
    {
      path: '/dashboard',
      name: "dashboard",
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
      },
      component: () => import('../views/Dashboard.vue'),
    },

    //users
    {
      path: '/users',
      component: () => import('../views/users/liste_of_users.vue'),
      name: "Utilisateurs",
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Utilisateurs"],
      },
    },
    {
      path: '/user/new',
      component: () => import('../views/users/add_user.vue'),
      name: "AjouterUtilisateurs",
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["AjouterUtilisateurs"],
      },
    },
    {
      path: '/user/:id/update',
      component: () => import('../views/users/update_user.vue'),
      name: "ModifierUtilisateurs",
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["ModifierUtilisateurs"],
      },
    },

    //users
    {
      path: '/roles',
      component: () => import('../views/users/roles/liste_of_roles.vue'),
      name: "Roles",
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Roles"],
      },
    },
    {
      path: '/role/new',
      component: () => import('../views/users/roles/add_role.vue'),
      name: "AjouterRoles",
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["AjouterRoles"],
      },
    },
    {
      path: '/role/:id/update',
      component: () => import('../views/users/roles/update_role.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["ModifierRoles"],
      },
    },

    //customers
    {
      path: '/customers',
      name: 'customers',
      component: () => import('../views/customers/liste_of_customers.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Clients"],

      },
    },
    {
      path: '/customer/new',
      component: () => import('../views/customers/add_customer.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["AjouterClients"],
      },
    },
    {
      path: '/customer/:id/update',
      component: () => import('../views/customers/update_customer.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["ModifierClients"],
      },
    },
    {
      path: '/customer/fees',
      component: () => import('../views/customers/customer_fees.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["ClientsTarifs"],
      },

    },


    //deliverymans
    {
      path: '/deliverymans',
      component: () => import('../views/deliveryman/liste_of_deliverymans.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Livreurs"],

      },
    },
    {
      path: '/deliveryman/new',
      component: () => import('../views/deliveryman/add_deliveryman.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["AjouterLivreurs"],
      },
    },
    {
      path: '/deliveryman/fees',
      component: () => import('../views/deliveryman/deliveryman_fees.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["LivreursTarifs"],
      },
    },
    {
      path: '/deliveryman/:id/update',
      component: () => import('../views/deliveryman/update_deliveryman.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["ModifierLivreurs"],
      },
    },
    /* pre defined  
     {
         path: '/cars',
         component: () => import('../views/deliveryman/cars.vue'),
       },
   */
    //expenses
    {
      path: '/expenses',
      component: () => import('../views/expenses/liste_of_expenses.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Paramettres"],

      },
    },
    {
      path: '/expense/new',
      component: () => import('../views/expenses/add_expense.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Paramettres"],
      },
    },
    {
      path: '/expense/:id/update',
      component: () => import('../views/expenses/update_expense.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Paramettres"],
      },
    },

    //bons
    // bons delivery
    {
      path: '/bons/delivery',
      component: () => import('../views/bons/bons_delivery/liste_of_bons.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["BonDeLivraison"],
      },
    },
    {
      path: '/bons/delivery/new',
      component: () => import('../views/bons/bons_delivery/add_bon_delivery.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["AjouterBonDeLivraison"],
      },
    },
    {
      path: '/bon/:id/delivery/update',
      component: () => import('../views/bons/bons_delivery/update_bon_delivery.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["ModifierBonDeLivraison"],
      },
    },

    // bons pickup
    {
      path: '/bons/pickup',
      component: () => import('../views/bons/bons_pickup/liste_of_bons.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["BonDeRamassage"],
      },
    },
    {
      path: '/bons/pickup/new',
      component: () => import('../views/bons/bons_pickup/add_bon_pickup.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["BonDeRamassage"],
      },
    },
    {
      path: '/bon/:id/pickup/update',
      component: () => import('../views/bons/bons_pickup/update_bon_pickup.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["BonDeRamassage"],
      },
    },
    // bons return Client
    {
      path: '/bons/customer/return',
      component: () => import('../views/bons/bons_return_customer/liste_of_bons.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["BonDeRetourClient"],
      },
    },
    {
      path: '/bon/customer/return/new',
      component: () => import('../views/bons/bons_return_customer/add_bon_return.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["BonDeRetourClient"],
      },
    },
    {
      path: '/bon/:id/customer/return/update',
      component: () => import('../views/bons/bons_return_customer/update_bon_return.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["BonDeRetourClient"],
      },
    },

    // bons return Deliveryman
    {
      path: '/bons/delivery/return',
      component: () => import('../views/bons/bons_return_delivery/liste_of_bons.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["BonDeRetourLivreur"],
      },
    },
    {
      path: '/bon/delivery/return/new',
      component: () => import('../views/bons/bons_return_delivery/add_bon_return.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["BonDeRetourLivreur"],
      },
    },
    {
      path: '/bon/:id/delivery/return/update',
      component: () => import('../views/bons/bons_return_delivery/update_bon_return.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["BonDeRetourLivreur"],
      },
    },

    // bons stocks
    {
      path: '/bons/stock',
      component: () => import('../views/bons/bons_stock/liste_of_bons.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Bons"],
      },
    },

    //invoices
    {
      path: '/invoices/customers',
      component: () => import('../views/invoices/customer_invoice/liste_of_invoices.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["FacturesClients"],
      },
    },
    {
      path: '/invoices/deliverymans',
      component: () => import('../views/invoices/delivery_invoice/liste_of_invoices.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["FacturesLivreurs"],
      },
    },

    //messages
    {
      path: '/messages',
      component: () => import('../views/messages/conversation.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Messages"],
      },
    },

    //orders
    {
      path: '/orders',
      component: () => import('../views/orders/liste_of_orders.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Commandes"],
      },
    },
    {
      path: '/orders/status/:status_id',
      component: () => import('../views/orders/liste_of_orders.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Commandes"],
      },
    },
    {
      path: '/order/new',
      component: () => import('../views/orders/add_order.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["AjouterCommande"],
      },
    },
    {
      path: '/order/:id/update',
      component: () => import('../views/orders/update_order.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["ModifierCommande"],
      },
    },
    {
      path: '/orders/import',
      component: () => import('../views/orders/import_orders.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["AjouterCommande"],
      },
    },
    {
      path: '/orders/match',
      component: () => import('../views/orders/match_orders.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["CommandesMatches"],
      },
    },

    //pickups
    {
      path: '/pickups',
      component: () => import('../views/pickups/liste_of_pickups.vue'), 
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Ramassages"],
      },
    },
    {
      path: '/pickup/new',
      component: () => import('../views/pickups/add_pickup.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Ramassages"],
      },
    },

    //embalages
    {
      path: '/packages',
      component: () => import('../views/embalages/liste_of_embalages.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Embalages"],
      },
    },
    {
      path: '/package/new',
      component: () => import('../views/embalages/add_embalage.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Embalages"],
      },
    },
    {
      path: '/package/:id/update',
      component: () => import('../views/embalages/update_embalage.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Embalages"],
      },
    },

    //settings
    //cities
    {
      path: '/cities',
      component: () => import('../views/cities/cities.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Paramettres"],
      },
    },
    {
      path: '/city/new',
      component: () => import('../views/cities/cities.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Paramettres"],
      },
    },

    //notes
    {
      path: '/notes',
      component: () => import('../views/settings/notes.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Paramettres"],
      },
    },
    //cities codes
    {
      path: '/cities/codes',
      component: () => import('../views/cities/cities_codes.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Paramettres"],
      },
    },
    //orders status
    {
      path: '/orders/status',
      component: () => import('../views/settings/orders_status.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Paramettres"],
      },
    },
    //stocks
    {
      path: '/stocks',
      component: () => import('../views/stocks/liste_of_products.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Stocks"],
      },
    },
    {
      path: '/product/new',
      component: () => import('../views/stocks/add_product.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Stocks"],
      },
    },
    {
      path: '/product/:id/update',
      component: () => import('../views/stocks/update_product.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Stocks"],
      },
    },


    //tickets
    {
      path: '/tickets',
      component: () => import('../views/tickets/liste_of_tickets.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Tickets"],

      },
    },
    {
      path: '/ticket/new',
      component: () => import('../views/tickets/add_ticket.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Tickets"],
      },
    },
    {
      path: '/ticket/:id/update',
      component: () => import('../views/tickets/update_ticket.vue'),
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["Tickets"],
      },
    },

    //auth
    //login

    {
      path: '/login',
      component: () => import('../views/auth/login.vue'),
      name: "login",
      meta: {
        requiresAuth: false, // Specify that this route requires authentication
      },
    },
    {
      path: '/register',
      component: () => import('../views/auth/register.vue'),
      name: "register",
      meta: {
        requiresAuth: false, // Specify that this route requires authentication
      },
    },
    {
      path: '/profile',
      component: () => import('../views/profile.vue'),
      name: "profile",
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
      },
    },
    {
      path: '/informations',
      component: () => import('../views/informations.vue'),
      name: "informations",
      meta: {
        requiresAuth: true, // Specify that this route requires authentication
        requiredRoles: ["CompanyInfo"],
      },
    },




    {
      path: '/unautorize',
      component: () => import('../views/auth/unautorize.vue'),
      name: "unautorize",
      meta: {
        requiresAuth: false, // Specify that this route requires authentication
      },
    },
    { path: '/:catchAll(.*)', redirect: '/404' },



  ]
})





let fetchPermissionsDispatched = false;

router.beforeEach(async (to, from, next) => {

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth) {
    // Route requires authentication
    //  const isAuthenticated = await checkAuthentication();

    if (checkAuthentication()) {

      if (!fetchPermissionsDispatched) {
        try {
          await store.dispatch('permissions/fetchPermissions');
          await store.dispatch('auth/setIsAuth',true);

          store.state.auth.IsAuth = true
          console.log(store.state.auth.IsAuth)
          store.state.auth.username = store.state.permissions.permissions.username
          store.state.auth.profileimg = "https://api.gestion-livraison.pro/"+store.state.permissions.permissions.profile_img

          fetchPermissionsDispatched = true; // Set the flag to true
          console.log("router .js dispatch");
        } catch (error) {
          console.error("Error fetching permissions:", error);
          next({ name: 'error' });
        }
      }

      console.log("is auth router : " + store.state.auth.IsAuth + "Dispatch Permission : " + fetchPermissionsDispatched)

      const requiredRoles = to.meta.requiredRoles;
      const userRoles = store.state.permissions.permissions;

      // Check if perm.state.permissions is defined and contains RoleAccess
      const userModules = userRoles && userRoles.RoleAccess ? userRoles.RoleAccess.map((role) => role.module) : [];

      // Then, check if the requiredRoles are present in the userModules
      const areRequiredRolesPresent = !requiredRoles || requiredRoles.every((role) => userModules.includes(role));

      if (!requiredRoles || areRequiredRolesPresent) {
        next();
      } else {

        // Redirect to a not authorized page or show an error message
        next({ name: 'unautorize' });
      }
    } else {
      // User is not authenticated, redirect to the login page
      store.state.auth.IsAuth = false
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      store.state.permissions.permissions = false
      console.log(store.state.auth.IsAuth)
      next({ name: 'login' });
    }
  } else {
    // Route does not require authentication, proceed to the requested route
    next();
  }
});







export default router
