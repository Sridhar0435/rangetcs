const envDetails = {
  dev: {
    BASE_URL: "https://dev-api.morrisons.com/",
    BASE_URL_SIT: "https://sit-api.morrisons.com/",
    API_KEY: "vqaiDRZzSQhA6CPAy0rSotsQAkRepprX",
    PRODUCT_HIERARCHY_GET: "product/v1/hierarchies/reporting",
    PRODUCT_HIERARCHY_LIST_GET:
      "product/v1/hierarchylists/reporting/nodetype/{nodetype}",
    GET_MANAGE_TASK_CAMUNDA:
      "commercial-workflow-range/v1/events/{eventId}/process/hbtwEventRequestHandler",
    PUT_CAMUNDA_CLAIM:
      "commercial-workflow-range/v1/tasks/{taskId}/claim/process/hbtwEventRequestHandler",
    PUT_MANAGE_EVENT_PUBLISH_TASK_CAMUNDA:
      "commercial-workflow-range/v1/events/{eventId}/approverangeevent/process/hbtwEventRequestHandler",
    GET_APP_MENU_ID: "commercial-user/v1/apps/{appMenuId}",
    GET_APP_MENU_ALL: "commercial-user/v1/apps",
    GET_USER_DETAILS_ID: "commercial-user/v1/userdetails/{userId}",
    PUT_USER_DETAILS_ID: "commercial-user/v1/userdetails/{userId}",
    PUT_USER_DETAILS_ID_CAMUNDA:
      "commercial-workflow/v1/users/userdetails/{userId}",
    GET_DASHBOARD_STATUS_CAMUNDA: "commercial-workflow/v1/status/{userId}",
    PUT_CLAIM_TASK_CAMUNDA: "commercial-workflow/v1/tasks/{taskId}/claim",
    PUT_REJECT_TASK_CAMUNDA:
      "commercial-workflow/v1/tasks/businesskeys/{businessKey}/reject",
    PUT_COMPLETE_TASK_CAMUNDA: "commercial-workflow/v1/tasks/{taskId}/complete",
    GET_USER_DETAILS_ALL: "commercial-user/v1/userdetails",
    GET_ROLES_ID: "commercial-user/v1/roles/{roleId}",
    GET_ROLES_ALL: "commercial-user/v1/roles",
    GET_USER_GROUPS_ID: "commercial-user/v1/usergroups/{groupId}",
    PUT_USER_GROUPS_ID: "commercial-user/v1/usergroups/{groupId}",
    GET_USER_GROUPS_ALL: "commercial-user/v1/usergroups",
    GET_TASKLIST_ID: "commercial-user/v1/tasklists/{requestId}",
    PUT_TASKLIST_ID: "commercial-user/v1/tasklists/{requestId}",
    GET_TASKLIST_ALL: "commercial-user/v1/tasklists",
    GET_TASKLOG_ID: "commercial-user/v1/tasklogs/{requestId}",
    GET_TASKLOG_ALL: "commercial-user/v1/tasklogs",
    POST_TASKLOG_ID: "commercial-user/v1/tasklogs",
    POST_ATTACHMENT: "commercial-user/v1/attachments/users/{userId}",
    GET_LOCATIONS: "location/v2/stores",
    GET_USER_INFO: "colleague/v1/colleagues/@me",
    GET_USER_INFO_OTHER: "colleague/v1/colleagues/{userId}",
    PATCH_RANGERESET_EVENTS: "rangereset/v2/rangeresetevents",
    GET_RANGERESET_EVENTS: "rangereset/v2/rangeresetevents",
    GOOGLE_CLIENT_ID:
      "171849099600-gb5qs9al4mvmk93j3nuam7mgqvv0pmct.apps.googleusercontent.com",
    USER_V2: "user/v2/token",
  },
  sit: {
    BASE_URL: "https://sit-api.morrisons.com/",
    BASE_URL_SIT: "https://sit-api.morrisons.com/",
    API_KEY: "vqaiDRZzSQhA6CPAy0rSotsQAkRepprX",
    PRODUCT_HIERARCHY_GET: "product/v1/hierarchies/reporting",
    PRODUCT_HIERARCHY_LIST_GET:
      "product/v1/hierarchylists/reporting/nodetype/{nodetype}",
    GET_MANAGE_TASK_CAMUNDA:
      "commercial-workflow-range/v1/events/{eventId}/process/hbtwEventRequestHandler",
    PUT_CAMUNDA_CLAIM:
      "commercial-workflow-range/v1/tasks/{taskId}/claim/process/hbtwEventRequestHandler",
    PUT_MANAGE_EVENT_PUBLISH_TASK_CAMUNDA:
      "commercial-workflow-range/v1/events/{eventId}/approverangeevent/process/hbtwEventRequestHandler",
    GET_APP_MENU_ID: "commercial-user/v1/apps/{appMenuId}",
    GET_APP_MENU_ALL: "commercial-user/v1/apps",
    GET_USER_DETAILS_ID: "commercial-user/v1/userdetails/{userId}",
    PUT_USER_DETAILS_ID: "commercial-user/v1/userdetails/{userId}",
    PUT_USER_DETAILS_ID_CAMUNDA:
      "commercial-workflow/v1/users/userdetails/{userId}",
    GET_DASHBOARD_STATUS_CAMUNDA: "commercial-workflow/v1/status/{userId}",
    PUT_CLAIM_TASK_CAMUNDA: "commercial-workflow/v1/tasks/{taskId}/claim",
    PUT_REJECT_TASK_CAMUNDA:
      "commercial-workflow/v1/tasks/businesskeys/{businessKey}/reject",
    PUT_COMPLETE_TASK_CAMUNDA: "commercial-workflow/v1/tasks/{taskId}/complete",
    GET_USER_DETAILS_ALL: "commercial-user/v1/userdetails",
    GET_ROLES_ID: "commercial-user/v1/roles/{roleId}",
    GET_ROLES_ALL: "commercial-user/v1/roles",
    GET_USER_GROUPS_ID: "commercial-user/v1/usergroups/{groupId}",
    PUT_USER_GROUPS_ID: "commercial-user/v1/usergroups/{groupId}",
    GET_USER_GROUPS_ALL: "commercial-user/v1/usergroups",
    GET_TASKLIST_ID: "commercial-user/v1/tasklists/{requestId}",
    PUT_TASKLIST_ID: "commercial-user/v1/tasklists/{requestId}",
    GET_TASKLIST_ALL: "commercial-user/v1/tasklists",
    GET_TASKLOG_ID: "commercial-user/v1/tasklogs/{requestId}",
    GET_TASKLOG_ALL: "commercial-user/v1/tasklogs",
    POST_TASKLOG_ID: "commercial-user/v1/tasklogs",
    POST_ATTACHMENT: "commercial-user/v1/attachments/users/{userId}",
    GET_LOCATIONS: "location/v2/stores",
    GET_USER_INFO: "colleague/v1/colleagues/@me",
    GET_USER_INFO_OTHER: "colleague/v1/colleagues/{userId}",
    PATCH_RANGERESET_EVENTS: "rangereset/v2/rangeresetevents",
    GET_RANGERESET_EVENTS: "rangereset/v2/rangeresetevents",
    GOOGLE_CLIENT_ID:
      "171849099600-gb5qs9al4mvmk93j3nuam7mgqvv0pmct.apps.googleusercontent.com",
    USER_V2: "user/v2/token",
  },
  pre: {
    BASE_URL: "https://pre-api.morrisons.com/",
    BASE_URL_SIT: "https://pre-api.morrisons.com/",
    API_KEY: "vqaiDRZzSQhA6CPAy0rSotsQAkRepprX",
    PRODUCT_HIERARCHY_GET: "product/v1/hierarchies/reporting",
    PRODUCT_HIERARCHY_LIST_GET:
      "product/v1/hierarchylists/reporting/nodetype/{nodetype}",
    GET_MANAGE_TASK_CAMUNDA:
      "commercial-workflow-range/v1/events/{eventId}/process/hbtwEventRequestHandler",
    PUT_CAMUNDA_CLAIM:
      "commercial-workflow-range/v1/tasks/{taskId}/claim/process/hbtwEventRequestHandler",
    PUT_MANAGE_EVENT_PUBLISH_TASK_CAMUNDA:
      "commercial-workflow-range/v1/events/{eventId}/approverangeevent/process/hbtwEventRequestHandler",
    GET_APP_MENU_ID: "commercial-user/v1/apps/{appMenuId}",
    GET_APP_MENU_ALL: "commercial-user/v1/apps",
    GET_USER_DETAILS_ID: "commercial-user/v1/userdetails/{userId}",
    PUT_USER_DETAILS_ID: "commercial-user/v1/userdetails/{userId}",
    PUT_USER_DETAILS_ID_CAMUNDA:
      "commercial-workflow/v1/users/userdetails/{userId}",
    GET_DASHBOARD_STATUS_CAMUNDA: "commercial-workflow/v1/status/{userId}",
    PUT_CLAIM_TASK_CAMUNDA: "commercial-workflow/v1/tasks/{taskId}/claim",
    PUT_REJECT_TASK_CAMUNDA:
      "commercial-workflow/v1/tasks/businesskeys/{businessKey}/reject",
    PUT_COMPLETE_TASK_CAMUNDA: "commercial-workflow/v1/tasks/{taskId}/complete",
    GET_USER_DETAILS_ALL: "commercial-user/v1/userdetails",
    GET_ROLES_ID: "commercial-user/v1/roles/{roleId}",
    GET_ROLES_ALL: "commercial-user/v1/roles",
    GET_USER_GROUPS_ID: "commercial-user/v1/usergroups/{groupId}",
    PUT_USER_GROUPS_ID: "commercial-user/v1/usergroups/{groupId}",
    GET_USER_GROUPS_ALL: "commercial-user/v1/usergroups",
    GET_TASKLIST_ID: "commercial-user/v1/tasklists/{requestId}",
    PUT_TASKLIST_ID: "commercial-user/v1/tasklists/{requestId}",
    GET_TASKLIST_ALL: "commercial-user/v1/tasklists",
    GET_TASKLOG_ID: "commercial-user/v1/tasklogs/{requestId}",
    GET_TASKLOG_ALL: "commercial-user/v1/tasklogs",
    POST_TASKLOG_ID: "commercial-user/v1/tasklogs",
    POST_ATTACHMENT: "commercial-user/v1/attachments/users/{userId}",
    GET_LOCATIONS: "location/v2/stores",
    GET_USER_INFO: "colleague/v1/colleagues/@me",
    GET_USER_INFO_OTHER: "colleague/v1/colleagues/{userId}",
    PATCH_RANGERESET_EVENTS: "rangereset/v2/rangeresetevents",
    GET_RANGERESET_EVENTS: "rangereset/v2/rangeresetevents",
    GOOGLE_CLIENT_ID:
      "171849099600-gb5qs9al4mvmk93j3nuam7mgqvv0pmct.apps.googleusercontent.com",
    USER_V2: "user/v2/token",
  },
  prd: {
    BASE_URL: "https://api.morrisons.com/",
    BASE_URL_SIT: "https://api.morrisons.com/",
    API_KEY: "vqaiDRZzSQhA6CPAy0rSotsQAkRepprX",
    PRODUCT_HIERARCHY_GET: "product/v1/hierarchies/reporting",
    PRODUCT_HIERARCHY_LIST_GET:
      "product/v1/hierarchylists/reporting/nodetype/{nodetype}",
    GET_MANAGE_TASK_CAMUNDA:
      "commercial-workflow-range/v1/events/{eventId}/process/hbtwEventRequestHandler",
    PUT_CAMUNDA_CLAIM:
      "commercial-workflow-range/v1/tasks/{taskId}/claim/process/hbtwEventRequestHandler",
    PUT_MANAGE_EVENT_PUBLISH_TASK_CAMUNDA:
      "commercial-workflow-range/v1/events/{eventId}/approverangeevent/process/hbtwEventRequestHandler",
    GET_APP_MENU_ID: "commercial-user/v1/apps/{appMenuId}",
    GET_APP_MENU_ALL: "commercial-user/v1/apps",
    GET_USER_DETAILS_ID: "commercial-user/v1/userdetails/{userId}",
    PUT_USER_DETAILS_ID: "commercial-user/v1/userdetails/{userId}",
    PUT_USER_DETAILS_ID_CAMUNDA:
      "commercial-workflow/v1/users/userdetails/{userId}",
    GET_DASHBOARD_STATUS_CAMUNDA: "commercial-workflow/v1/status/{userId}",
    PUT_CLAIM_TASK_CAMUNDA: "commercial-workflow/v1/tasks/{taskId}/claim",
    PUT_REJECT_TASK_CAMUNDA:
      "commercial-workflow/v1/tasks/businesskeys/{businessKey}/reject",
    PUT_COMPLETE_TASK_CAMUNDA: "commercial-workflow/v1/tasks/{taskId}/complete",
    GET_USER_DETAILS_ALL: "commercial-user/v1/userdetails",
    GET_ROLES_ID: "commercial-user/v1/roles/{roleId}",
    GET_ROLES_ALL: "commercial-user/v1/roles",
    GET_USER_GROUPS_ID: "commercial-user/v1/usergroups/{groupId}",
    PUT_USER_GROUPS_ID: "commercial-user/v1/usergroups/{groupId}",
    GET_USER_GROUPS_ALL: "commercial-user/v1/usergroups",
    GET_TASKLIST_ID: "commercial-user/v1/tasklists/{requestId}",
    PUT_TASKLIST_ID: "commercial-user/v1/tasklists/{requestId}",
    GET_TASKLIST_ALL: "commercial-user/v1/tasklists",
    GET_TASKLOG_ID: "commercial-user/v1/tasklogs/{requestId}",
    GET_TASKLOG_ALL: "commercial-user/v1/tasklogs",
    POST_TASKLOG_ID: "commercial-user/v1/tasklogs",
    POST_ATTACHMENT: "commercial-user/v1/attachments/users/{userId}",
    GET_LOCATIONS: "location/v2/stores",
    GET_USER_INFO: "colleague/v1/colleagues/@me",
    GET_USER_INFO_OTHER: "colleague/v1/colleagues/{userId}",
    PATCH_RANGERESET_EVENTS: "rangereset/v2/rangeresetevents",
    GET_RANGERESET_EVENTS: "rangereset/v2/rangeresetevents",
    GOOGLE_CLIENT_ID:
      "171849099600-gb5qs9al4mvmk93j3nuam7mgqvv0pmct.apps.googleusercontent.com",
    USER_V2: "user/v2/token",
  },
  test: {
    BASE_URL: "https://sit-api.morrisons.com/",
    BASE_URL_SIT: "https://sit-api.morrisons.com/",
    API_KEY: "vqaiDRZzSQhA6CPAy0rSotsQAkRepprX",
    PRODUCT_HIERARCHY_GET: "product/v1/hierarchies/reporting",
    PRODUCT_HIERARCHY_LIST_GET:
      "product/v1/hierarchylists/reporting/nodetype/{nodetype}",
    GET_MANAGE_TASK_CAMUNDA:
      "commercial-workflow-range/v1/events/{eventId}/process/hbtwEventRequestHandler/:eventid",
    PUT_CAMUNDA_CLAIM:
      "commercial-workflow-range/v1/tasks/{taskId}/claim/process/hbtwEventRequestHandler",
    PUT_MANAGE_EVENT_PUBLISH_TASK_CAMUNDA:
      "commercial-workflow-range/v1/events/{eventId}/approverangeevent/process/hbtwEventRequestHandler",
    GET_APP_MENU_ID: "commercial-user/v1/apps/{appMenuId}",
    GET_APP_MENU_ALL: "commercial-user/v1/apps",
    GET_USER_DETAILS_ID: "commercial-user/v1/userdetails/{userId}",
    PUT_USER_DETAILS_ID: "commercial-user/v1/userdetails/{userId}",
    PUT_USER_DETAILS_ID_CAMUNDA:
      "commercial-workflow/v1/users/userdetails/{userId}",
    GET_DASHBOARD_STATUS_CAMUNDA: "commercial-workflow/v1/status/{userId}",
    PUT_CLAIM_TASK_CAMUNDA: "commercial-workflow/v1/tasks/{taskId}/claim",
    PUT_REJECT_TASK_CAMUNDA:
      "commercial-workflow/v1/tasks/businesskeys/{businessKey}/reject",
    PUT_COMPLETE_TASK_CAMUNDA: "commercial-workflow/v1/tasks/{taskId}/complete",
    GET_USER_DETAILS_ALL: "commercial-user/v1/userdetails",
    GET_ROLES_ID: "commercial-user/v1/roles/{roleId}",
    GET_ROLES_ALL: "commercial-user/v1/roles",
    GET_USER_GROUPS_ID: "commercial-user/v1/usergroups/{groupId}",
    PUT_USER_GROUPS_ID: "commercial-user/v1/usergroups/{groupId}",
    GET_USER_GROUPS_ALL: "commercial-user/v1/usergroups",
    GET_TASKLIST_ID: "commercial-user/v1/tasklists/{requestId}",
    PUT_TASKLIST_ID: "commercial-user/v1/tasklists/{requestId}",
    GET_TASKLIST_ALL: "commercial-user/v1/tasklists",
    GET_TASKLOG_ID: "commercial-user/v1/tasklogs/{requestId}",
    GET_TASKLOG_ALL: "commercial-user/v1/tasklogs",
    POST_TASKLOG_ID: "commercial-user/v1/tasklogs",
    POST_ATTACHMENT: "commercial-user/v1/attachments/users/{userId}",
    GET_LOCATIONS: "location/v2/stores",
    GET_USER_INFO: "colleague/v1/colleagues/@me",
    GET_USER_INFO_OTHER: "colleague/v1/colleagues/{userId}",
    PATCH_RANGERESET_EVENTS: "rangereset/v2/rangeresetevents",
    GET_RANGERESET_EVENTS: "rangereset/v2/rangeresetevents",
    GOOGLE_CLIENT_ID:
      "171849099600-gb5qs9al4mvmk93j3nuam7mgqvv0pmct.apps.googleusercontent.com",
    USER_V2: "user/v2/token",
    GOOGLE_RESPONSE: {
      tokenObj: {
        id_token: "id-token",
      },
      tokenId: "token-id",
      Rt: {
        Ad: "test user",
      },
    },
  },
};

const env = process.env.REACT_APP_ENV ? process.env.REACT_APP_ENV : "dev";

export default envDetails[env];
