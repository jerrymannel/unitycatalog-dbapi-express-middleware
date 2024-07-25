#!/bin/bash


DATABRICKS_SERVER_HOSTNAME="dnimbus-partner-workspace.cloud.databricks.com" DATABRICKS_TOKEN="dapi1067eef3afc1e81d1b4c9ac62a0ece88" DATABRICKS_WAREHOUSE_ID="d3f14774ae9e92ae" LOG_LEVEL="trace" nodemon example/server.js | npx pino-pretty