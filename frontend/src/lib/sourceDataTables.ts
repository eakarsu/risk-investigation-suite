export type SourceDataColumn = {
  name: string;
  type: string;
  nullable: boolean;
  primaryKey: boolean;
  unique: boolean;
  defaultValue: string;
  sourceLine: string;
};

export type SourceDataTable = {
  id: string;
  sourceProject: string;
  name: string;
  displayName: string;
  framework: string;
  sourceFile: string;
  columns: SourceDataColumn[];
};

export const sourceDataTables: SourceDataTable[] = [
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-001-schema-sql-accounts",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "accounts",
    "displayName": "Accounts",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "account_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "account_id      VARCHAR(50) UNIQUE"
      },
      {
        "name": "customer_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer_id     VARCHAR(50)"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            VARCHAR(40)"
      },
      {
        "name": "balance",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "balance         NUMERIC(18,2) DEFAULT 0"
      },
      {
        "name": "currency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'USD'",
        "sourceLine": "currency        VARCHAR(10) DEFAULT 'USD'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'open'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-003-pass7-sql-advisory-actions",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "advisory_actions",
    "displayName": "Advisory Actions",
    "framework": "SQL",
    "sourceFile": "backend/migrations/003_pass7.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                    SERIAL PRIMARY KEY"
      },
      {
        "name": "action_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action_type           VARCHAR(60) NOT NULL"
      },
      {
        "name": "target_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_type           VARCHAR(40)"
      },
      {
        "name": "target_ref",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_ref            VARCHAR(80)"
      },
      {
        "name": "rationale",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rationale             TEXT"
      },
      {
        "name": "requires_human_review",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "requires_human_review BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "reviewer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reviewer              VARCHAR(160)"
      },
      {
        "name": "review_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "review_status         VARCHAR(30) DEFAULT 'pending'"
      },
      {
        "name": "reviewed_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reviewed_at           TIMESTAMPTZ"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payload               JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at            TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-001-schema-sql-ai-results",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature         VARCHAR(80) NOT NULL"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input           JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output          JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-001-schema-sql-alerts",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "alerts",
    "displayName": "Alerts",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "alert_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "alert_id        VARCHAR(50) UNIQUE"
      },
      {
        "name": "customer_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer_id     VARCHAR(50)"
      },
      {
        "name": "rule",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rule            VARCHAR(160)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "severity        VARCHAR(20) DEFAULT 'medium'"
      },
      {
        "name": "opened_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "opened_at       TIMESTAMPTZ"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'open'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-002-schema-sql-attachments",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "attachments",
    "displayName": "Attachments",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "resource_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resource_type   VARCHAR(60)"
      },
      {
        "name": "resource_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resource_id     INTEGER"
      },
      {
        "name": "filename",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filename        VARCHAR(255)"
      },
      {
        "name": "original_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "original_name   VARCHAR(255)"
      },
      {
        "name": "mimetype",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mimetype        VARCHAR(120)"
      },
      {
        "name": "size_bytes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "size_bytes      INTEGER"
      },
      {
        "name": "uploaded_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "uploaded_by     VARCHAR(150)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-001-schema-sql-audit-log",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "audit_log",
    "displayName": "Audit Log",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "entry_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "entry_id        VARCHAR(50) UNIQUE"
      },
      {
        "name": "actor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actor           VARCHAR(160)"
      },
      {
        "name": "target",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target          VARCHAR(200)"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action          VARCHAR(120)"
      },
      {
        "name": "result",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result          VARCHAR(60)"
      },
      {
        "name": "ts",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ts              TIMESTAMPTZ"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-001-schema-sql-beneficial-owners",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "beneficial_owners",
    "displayName": "Beneficial Owners",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "owner_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "owner_id        VARCHAR(50) UNIQUE"
      },
      {
        "name": "entity_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id       VARCHAR(50)"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(200)"
      },
      {
        "name": "country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country         VARCHAR(80)"
      },
      {
        "name": "pct_ownership",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "pct_ownership   NUMERIC(5,2) DEFAULT 0"
      },
      {
        "name": "verified",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "verified        BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-003-pass7-sql-case-state-transitions",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "case_state_transitions",
    "displayName": "Case State Transitions",
    "framework": "SQL",
    "sourceFile": "backend/migrations/003_pass7.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "case_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "case_type       VARCHAR(40) NOT NULL"
      },
      {
        "name": "case_ref",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "case_ref        VARCHAR(80) NOT NULL"
      },
      {
        "name": "from_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "from_status     VARCHAR(60)"
      },
      {
        "name": "to_status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "to_status       VARCHAR(60) NOT NULL"
      },
      {
        "name": "actor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actor           VARCHAR(160)"
      },
      {
        "name": "reason",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason          TEXT"
      },
      {
        "name": "legal_ok",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "legal_ok        BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-001-schema-sql-ctrs",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "ctrs",
    "displayName": "Ctrs",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "ctr_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "ctr_id          VARCHAR(50) UNIQUE"
      },
      {
        "name": "customer_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer_id     VARCHAR(50)"
      },
      {
        "name": "aggregate_amount",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "aggregate_amount NUMERIC(18,2) DEFAULT 0"
      },
      {
        "name": "period",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period          VARCHAR(40)"
      },
      {
        "name": "filed_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filed_at        TIMESTAMPTZ"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'pending'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-001-schema-sql-customers",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "customers",
    "displayName": "Customers",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "customer_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "customer_id     VARCHAR(50) UNIQUE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(200) NOT NULL"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            VARCHAR(40)"
      },
      {
        "name": "country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country         VARCHAR(80)"
      },
      {
        "name": "risk_tier",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'low'",
        "sourceLine": "risk_tier       VARCHAR(20) DEFAULT 'low'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-001-schema-sql-edd-cases",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "edd_cases",
    "displayName": "Edd Cases",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "edd_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "edd_id          VARCHAR(50) UNIQUE"
      },
      {
        "name": "customer_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer_id     VARCHAR(50)"
      },
      {
        "name": "trigger",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "trigger         VARCHAR(200)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'open'"
      },
      {
        "name": "opened_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "opened_at       TIMESTAMPTZ"
      },
      {
        "name": "owner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner           VARCHAR(120)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-003-pass7-sql-escalation-assignments",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "escalation_assignments",
    "displayName": "Escalation Assignments",
    "framework": "SQL",
    "sourceFile": "backend/migrations/003_pass7.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "case_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "case_type       VARCHAR(40) NOT NULL"
      },
      {
        "name": "case_ref",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "case_ref        VARCHAR(80) NOT NULL"
      },
      {
        "name": "queue_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "queue_id        VARCHAR(60)"
      },
      {
        "name": "assigned_to",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to     VARCHAR(160)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity        VARCHAR(20)"
      },
      {
        "name": "reason",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason          TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'open'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-003-pass7-sql-escalation-queues",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "escalation_queues",
    "displayName": "Escalation Queues",
    "framework": "SQL",
    "sourceFile": "backend/migrations/003_pass7.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "queue_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "queue_id        VARCHAR(60) UNIQUE NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(160) NOT NULL"
      },
      {
        "name": "severity_floor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'low'",
        "sourceLine": "severity_floor  VARCHAR(20) DEFAULT 'low'"
      },
      {
        "name": "jurisdiction",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "jurisdiction    VARCHAR(80)"
      },
      {
        "name": "on_call_user",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "on_call_user    VARCHAR(160)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-003-pass7-sql-fincen-field-mappings",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "fincen_field_mappings",
    "displayName": "Fincen Field Mappings",
    "framework": "SQL",
    "sourceFile": "backend/migrations/003_pass7.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "filing_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filing_type     VARCHAR(20) NOT NULL"
      },
      {
        "name": "internal_path",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "internal_path   VARCHAR(160) NOT NULL"
      },
      {
        "name": "xsd_element",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "xsd_element     VARCHAR(160) NOT NULL"
      },
      {
        "name": "required",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "required        BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-001-schema-sql-investigations",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "investigations",
    "displayName": "Investigations",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "inv_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "inv_id          VARCHAR(50) UNIQUE"
      },
      {
        "name": "case_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "case_id         VARCHAR(50)"
      },
      {
        "name": "lead",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lead            VARCHAR(200)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'open'"
      },
      {
        "name": "opened_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "opened_at       TIMESTAMPTZ"
      },
      {
        "name": "owner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner           VARCHAR(120)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-001-schema-sql-jurisdictions",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "jurisdictions",
    "displayName": "Jurisdictions",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "jur_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "jur_id          VARCHAR(50) UNIQUE"
      },
      {
        "name": "country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country         VARCHAR(80)"
      },
      {
        "name": "fatf_rating",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fatf_rating     VARCHAR(40)"
      },
      {
        "name": "risk_score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "risk_score      INTEGER DEFAULT 0"
      },
      {
        "name": "sanctions_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sanctions_status VARCHAR(40)"
      },
      {
        "name": "last_review",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_review     DATE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-001-schema-sql-kyc-profiles",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "kyc_profiles",
    "displayName": "Kyc Profiles",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "profile_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "profile_id      VARCHAR(50) UNIQUE"
      },
      {
        "name": "customer_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer_id     VARCHAR(50)"
      },
      {
        "name": "doc_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "doc_type        VARCHAR(60)"
      },
      {
        "name": "expires_at",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expires_at      DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'verified'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'verified'"
      },
      {
        "name": "refresh_due",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "refresh_due     DATE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-002-schema-sql-notifications",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "notifications",
    "displayName": "Notifications",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id         INTEGER"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title           VARCHAR(200)"
      },
      {
        "name": "body",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "body            TEXT"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'info'",
        "sourceLine": "severity        VARCHAR(20) DEFAULT 'info'"
      },
      {
        "name": "source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source          VARCHAR(80)"
      },
      {
        "name": "read_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "read_at         TIMESTAMPTZ"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-001-schema-sql-peps",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "peps",
    "displayName": "Peps",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "pep_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "pep_id          VARCHAR(50) UNIQUE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(200)"
      },
      {
        "name": "country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country         VARCHAR(80)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role            VARCHAR(200)"
      },
      {
        "name": "since",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "since           DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-001-schema-sql-regulatory-filings",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "regulatory_filings",
    "displayName": "Regulatory Filings",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "filing_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "filing_id       VARCHAR(50) UNIQUE"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            VARCHAR(60)"
      },
      {
        "name": "period",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period          VARCHAR(40)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'draft'"
      },
      {
        "name": "filed_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filed_at        TIMESTAMPTZ"
      },
      {
        "name": "filer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filer           VARCHAR(160)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-001-schema-sql-sanctions-hits",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "sanctions_hits",
    "displayName": "Sanctions Hits",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "hit_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "hit_id          VARCHAR(50) UNIQUE"
      },
      {
        "name": "customer_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer_id     VARCHAR(50)"
      },
      {
        "name": "list",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "list            VARCHAR(80)"
      },
      {
        "name": "score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "score           INTEGER DEFAULT 0"
      },
      {
        "name": "matched_field",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "matched_field   VARCHAR(80)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'open'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-001-schema-sql-sar-cases",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "sar_cases",
    "displayName": "Sar Cases",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "case_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "case_id         VARCHAR(50) UNIQUE"
      },
      {
        "name": "customer_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer_id     VARCHAR(50)"
      },
      {
        "name": "suspicion",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "suspicion       VARCHAR(300)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'open'"
      },
      {
        "name": "opened_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "opened_at       TIMESTAMPTZ"
      },
      {
        "name": "owner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner           VARCHAR(120)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-001-schema-sql-source-of-funds",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "source_of_funds",
    "displayName": "Source Of Funds",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "sof_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "sof_id          VARCHAR(50) UNIQUE"
      },
      {
        "name": "customer_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer_id     VARCHAR(50)"
      },
      {
        "name": "source_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_type     VARCHAR(80)"
      },
      {
        "name": "amount",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "amount          NUMERIC(18,2) DEFAULT 0"
      },
      {
        "name": "evidence",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "evidence        VARCHAR(300)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'pending'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-001-schema-sql-transactions",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "transactions",
    "displayName": "Transactions",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "txn_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "txn_id          VARCHAR(50) UNIQUE"
      },
      {
        "name": "account_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "account_id      VARCHAR(50)"
      },
      {
        "name": "amount",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "amount          NUMERIC(18,2) DEFAULT 0"
      },
      {
        "name": "currency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'USD'",
        "sourceLine": "currency        VARCHAR(10) DEFAULT 'USD'"
      },
      {
        "name": "counterparty",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "counterparty    VARCHAR(200)"
      },
      {
        "name": "ts",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ts              TIMESTAMPTZ"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-003-pass7-sql-tx-events",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "tx_events",
    "displayName": "Tx Events",
    "framework": "SQL",
    "sourceFile": "backend/migrations/003_pass7.sql",
    "columns": [
      {
        "name": "id",
        "type": "BIGSERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              BIGSERIAL PRIMARY KEY"
      },
      {
        "name": "event_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "event_id        VARCHAR(80) UNIQUE"
      },
      {
        "name": "source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source          VARCHAR(60)"
      },
      {
        "name": "account_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "account_id      VARCHAR(50)"
      },
      {
        "name": "txn_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "txn_id          VARCHAR(80)"
      },
      {
        "name": "amount",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount          NUMERIC(18,2)"
      },
      {
        "name": "currency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currency        VARCHAR(10)"
      },
      {
        "name": "counterparty",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "counterparty    VARCHAR(200)"
      },
      {
        "name": "ts",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ts              TIMESTAMPTZ"
      },
      {
        "name": "raw_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "raw_payload     JSONB"
      },
      {
        "name": "processed",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "processed       BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "processed_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "processed_at    TIMESTAMPTZ"
      },
      {
        "name": "rule_state",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rule_state      JSONB"
      },
      {
        "name": "ingested_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "ingested_at     TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-001-schema-sql-typologies",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "typologies",
    "displayName": "Typologies",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "typology_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "typology_id     VARCHAR(50) UNIQUE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(160)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     TEXT"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "severity        VARCHAR(20) DEFAULT 'medium'"
      },
      {
        "name": "controls",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "controls        TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-002-schema-sql-users",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email           VARCHAR(150) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password        VARCHAR(120) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(120)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'viewer'",
        "sourceLine": "role            VARCHAR(20) DEFAULT 'viewer'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-001-schema-sql-watchlists",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "watchlists",
    "displayName": "Watchlists",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "list_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "list_id         VARCHAR(50) UNIQUE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(120)"
      },
      {
        "name": "jurisdiction",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "jurisdiction    VARCHAR(80)"
      },
      {
        "name": "last_updated",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_updated    DATE"
      },
      {
        "name": "version",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version         VARCHAR(40)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-002-schema-sql-webhook-deliveries",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "webhook_deliveries",
    "displayName": "Webhook Deliveries",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "webhook_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "webhook_id      INTEGER"
      },
      {
        "name": "event",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event           VARCHAR(120)"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payload         JSONB"
      },
      {
        "name": "status_code",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status_code     INTEGER"
      },
      {
        "name": "response_body",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "response_body   TEXT"
      },
      {
        "name": "attempted_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "attempted_at    TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-backend-migrations-002-schema-sql-webhooks",
    "sourceProject": "AIAMLTransactionMonitoring",
    "name": "webhooks",
    "displayName": "Webhooks",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(120)"
      },
      {
        "name": "url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "url             VARCHAR(500)"
      },
      {
        "name": "secret",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "secret          VARCHAR(120)"
      },
      {
        "name": "events",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "events          TEXT"
      },
      {
        "name": "active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "active          BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-anti-fraud-server-schema-sql-ai-results",
    "sourceProject": "AIAntiFraud",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id            SERIAL PRIMARY KEY"
      },
      {
        "name": "endpoint",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endpoint      VARCHAR(100) NOT NULL"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type   VARCHAR(100)"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id     INTEGER"
      },
      {
        "name": "input_data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data    JSONB"
      },
      {
        "name": "result",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result        JSONB NOT NULL"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used    VARCHAR(255)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id       INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-anti-fraud-server-schema-sql-audit-log",
    "sourceProject": "AIAntiFraud",
    "name": "audit_log",
    "displayName": "Audit Log",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id            SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id       INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action        VARCHAR(100) NOT NULL"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type   VARCHAR(100)"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id     INTEGER"
      },
      {
        "name": "details_json",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "details_json  JSONB DEFAULT '{}'"
      },
      {
        "name": "ip_address",
        "type": "INET",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ip_address    INET"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-anti-fraud-server-schema-sql-behavioral-patterns",
    "sourceProject": "AIAntiFraud",
    "name": "behavioral_patterns",
    "displayName": "Behavioral Patterns",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                        SERIAL PRIMARY KEY"
      },
      {
        "name": "customer_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer_id               VARCHAR(255) NOT NULL"
      },
      {
        "name": "pattern_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pattern_type              VARCHAR(100) NOT NULL"
      },
      {
        "name": "avg_transaction_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avg_transaction_amount    DECIMAL(15, 2)"
      },
      {
        "name": "max_transaction_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "max_transaction_amount    DECIMAL(15, 2)"
      },
      {
        "name": "typical_locations",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "typical_locations         JSONB DEFAULT '[]'"
      },
      {
        "name": "typical_times",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "typical_times             JSONB DEFAULT '{}'"
      },
      {
        "name": "device_fingerprints",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "device_fingerprints       JSONB DEFAULT '[]'"
      },
      {
        "name": "anomaly_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "anomaly_score             DECIMAL(5, 2) CHECK (anomaly_score >= 0 AND anomaly_score <= 100)"
      },
      {
        "name": "last_updated",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "last_updated              TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-anti-fraud-server-schema-sql-case-notes",
    "sourceProject": "AIAntiFraud",
    "name": "case_notes",
    "displayName": "Case Notes",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id          SERIAL PRIMARY KEY"
      },
      {
        "name": "case_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "case_id     INTEGER NOT NULL REFERENCES cases(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id     INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "note",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "note        TEXT NOT NULL"
      },
      {
        "name": "note_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'comment'",
        "sourceLine": "note_type   VARCHAR(50) NOT NULL DEFAULT 'comment' CHECK (note_type IN ('comment', 'evidence', 'decision', 'status_change'))"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-anti-fraud-server-schema-sql-cases",
    "sourceProject": "AIAntiFraud",
    "name": "cases",
    "displayName": "Cases",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title           VARCHAR(500) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     TEXT"
      },
      {
        "name": "status",
        "type": "case_status",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status          case_status NOT NULL DEFAULT 'open'"
      },
      {
        "name": "priority",
        "type": "rule_severity",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority        rule_severity NOT NULL DEFAULT 'medium'"
      },
      {
        "name": "assigned_to",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to     INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by      INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "alert_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "alert_id        INTEGER REFERENCES fraud_alerts(id) ON DELETE SET NULL"
      },
      {
        "name": "transaction_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transaction_id  INTEGER REFERENCES transactions(id) ON DELETE SET NULL"
      },
      {
        "name": "resolved_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolved_at     TIMESTAMPTZ"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-anti-fraud-server-schema-sql-chargebacks",
    "sourceProject": "AIAntiFraud",
    "name": "chargebacks",
    "displayName": "Chargebacks",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "transaction_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transaction_id  INTEGER REFERENCES transactions(id) ON DELETE SET NULL"
      },
      {
        "name": "alert_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "alert_id        INTEGER REFERENCES fraud_alerts(id) ON DELETE SET NULL"
      },
      {
        "name": "customer_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer_name   VARCHAR(255) NOT NULL"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount          DECIMAL(15, 2) NOT NULL"
      },
      {
        "name": "reason_code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason_code     VARCHAR(100)"
      },
      {
        "name": "reason_text",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason_text     TEXT"
      },
      {
        "name": "status",
        "type": "chargeback_status",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'filed'",
        "sourceLine": "status          chargeback_status NOT NULL DEFAULT 'filed'"
      },
      {
        "name": "filed_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "filed_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      },
      {
        "name": "evidence_due",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "evidence_due    TIMESTAMPTZ"
      },
      {
        "name": "decision_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "decision_at     TIMESTAMPTZ"
      },
      {
        "name": "ai_recommendation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_recommendation TEXT"
      },
      {
        "name": "ai_outcome_prediction",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_outcome_prediction JSONB"
      },
      {
        "name": "assigned_to",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to     INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-anti-fraud-server-schema-sql-credit-scores",
    "sourceProject": "AIAntiFraud",
    "name": "credit_scores",
    "displayName": "Credit Scores",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                        SERIAL PRIMARY KEY"
      },
      {
        "name": "customer_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer_name             VARCHAR(255) NOT NULL"
      },
      {
        "name": "customer_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer_email            VARCHAR(255)"
      },
      {
        "name": "ssn_last4",
        "type": "CHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ssn_last4                 CHAR(4)"
      },
      {
        "name": "credit_score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "credit_score              INTEGER CHECK (credit_score >= 300 AND credit_score <= 850)"
      },
      {
        "name": "risk_level",
        "type": "risk_level_enum",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "risk_level                risk_level_enum NOT NULL DEFAULT 'medium'"
      },
      {
        "name": "income",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "income                    DECIMAL(15, 2)"
      },
      {
        "name": "debt_to_income",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "debt_to_income            DECIMAL(5, 2)"
      },
      {
        "name": "payment_history_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_history_score     DECIMAL(5, 2)"
      },
      {
        "name": "credit_utilization",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "credit_utilization        DECIMAL(5, 2)"
      },
      {
        "name": "account_age_months",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "account_age_months        INTEGER"
      },
      {
        "name": "num_accounts",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "num_accounts              INTEGER"
      },
      {
        "name": "num_late_payments",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "num_late_payments         INTEGER"
      },
      {
        "name": "loan_amount_requested",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "loan_amount_requested     DECIMAL(15, 2)"
      },
      {
        "name": "loan_purpose",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "loan_purpose              VARCHAR(255)"
      },
      {
        "name": "ai_recommendation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_recommendation         TEXT"
      },
      {
        "name": "ai_risk_analysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_risk_analysis          JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at                TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at                TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-anti-fraud-server-schema-sql-fraud-alerts",
    "sourceProject": "AIAntiFraud",
    "name": "fraud_alerts",
    "displayName": "Fraud Alerts",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "transaction_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transaction_id  INTEGER REFERENCES transactions(id) ON DELETE CASCADE"
      },
      {
        "name": "rule_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rule_id         INTEGER REFERENCES fraud_rules(id) ON DELETE SET NULL"
      },
      {
        "name": "alert_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "alert_type      VARCHAR(100) NOT NULL"
      },
      {
        "name": "severity",
        "type": "alert_severity",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "severity        alert_severity NOT NULL DEFAULT 'medium'"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     TEXT"
      },
      {
        "name": "status",
        "type": "alert_status",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status          alert_status NOT NULL DEFAULT 'open'"
      },
      {
        "name": "assigned_to",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to     INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "resolved_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolved_at     TIMESTAMPTZ"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-anti-fraud-server-schema-sql-fraud-rules",
    "sourceProject": "AIAntiFraud",
    "name": "fraud_rules",
    "displayName": "Fraud Rules",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     TEXT"
      },
      {
        "name": "rule_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rule_type       VARCHAR(100) NOT NULL"
      },
      {
        "name": "condition_json",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "condition_json  JSONB NOT NULL DEFAULT '{}'"
      },
      {
        "name": "action",
        "type": "rule_action",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'flag'",
        "sourceLine": "action          rule_action NOT NULL DEFAULT 'flag'"
      },
      {
        "name": "severity",
        "type": "rule_severity",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "severity        rule_severity NOT NULL DEFAULT 'medium'"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "is_active       BOOLEAN NOT NULL DEFAULT TRUE"
      },
      {
        "name": "hit_count",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "hit_count       INTEGER NOT NULL DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-anti-fraud-server-routes-gap-ai-explainability-risk-score-outputs-js-gap-features",
    "sourceProject": "AIAntiFraud",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_ai_explainability_risk_score_outputs.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-anti-fraud-server-routes-gap-ai-money-mule-cash-out-js-gap-features",
    "sourceProject": "AIAntiFraud",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_ai_money_mule_cash_out.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-anti-fraud-server-routes-gap-ai-synthetic-identity-detection-js-gap-features",
    "sourceProject": "AIAntiFraud",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_ai_synthetic_identity_detection.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-anti-fraud-server-routes-gap-ai-velocity-rule-learning-rapid-js-gap-features",
    "sourceProject": "AIAntiFraud",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_ai_velocity_rule_learning_rapid.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-anti-fraud-server-routes-gap-biometric-device-fingerprint-verification-js-gap-features",
    "sourceProject": "AIAntiFraud",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_biometric_device_fingerprint_verification.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-anti-fraud-server-routes-gap-notifications-subsystem-js-gap-features",
    "sourceProject": "AIAntiFraud",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_notifications_subsystem.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-anti-fraud-server-routes-gap-outbound-webhooks-siem-soc-integration-js-gap-features",
    "sourceProject": "AIAntiFraud",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_outbound_webhooks_siem_soc_integration.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-anti-fraud-server-routes-gap-payment-network-integration-visa-mastercard-js-gap-features",
    "sourceProject": "AIAntiFraud",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_payment_network_integration_visa_mastercard.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-anti-fraud-server-schema-sql-merchant-risk-profiles",
    "sourceProject": "AIAntiFraud",
    "name": "merchant_risk_profiles",
    "displayName": "Merchant Risk Profiles",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                        SERIAL PRIMARY KEY"
      },
      {
        "name": "merchant_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "merchant_name             VARCHAR(255) NOT NULL"
      },
      {
        "name": "merchant_category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "merchant_category         VARCHAR(100)"
      },
      {
        "name": "risk_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_score                DECIMAL(5, 2) CHECK (risk_score >= 0 AND risk_score <= 100)"
      },
      {
        "name": "chargeback_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "chargeback_rate           DECIMAL(5, 4)"
      },
      {
        "name": "fraud_incident_count",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "fraud_incident_count      INTEGER NOT NULL DEFAULT 0"
      },
      {
        "name": "avg_transaction_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avg_transaction_amount    DECIMAL(15, 2)"
      },
      {
        "name": "country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country                   VARCHAR(100)"
      },
      {
        "name": "is_flagged",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "is_flagged                BOOLEAN NOT NULL DEFAULT FALSE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at                TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-anti-fraud-server-schema-sql-risk-models",
    "sourceProject": "AIAntiFraud",
    "name": "risk_models",
    "displayName": "Risk Models",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name              VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description       TEXT"
      },
      {
        "name": "model_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_type        VARCHAR(100) NOT NULL"
      },
      {
        "name": "accuracy",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accuracy          DECIMAL(5, 4)"
      },
      {
        "name": "precision_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "precision_score   DECIMAL(5, 4)"
      },
      {
        "name": "recall_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recall_score      DECIMAL(5, 4)"
      },
      {
        "name": "f1_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "f1_score          DECIMAL(5, 4)"
      },
      {
        "name": "status",
        "type": "model_status",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'inactive'",
        "sourceLine": "status            model_status NOT NULL DEFAULT 'inactive'"
      },
      {
        "name": "last_trained_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_trained_at   TIMESTAMPTZ"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-anti-fraud-server-schema-sql-rule-suggestions",
    "sourceProject": "AIAntiFraud",
    "name": "rule_suggestions",
    "displayName": "Rule Suggestions",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "suggested_by_ai",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'anthropic/claude-3-5-sonnet-20241022'",
        "sourceLine": "suggested_by_ai VARCHAR(255) NOT NULL DEFAULT 'anthropic/claude-3-5-sonnet-20241022'"
      },
      {
        "name": "rule_data",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rule_data       JSONB NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status          VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected'))"
      },
      {
        "name": "reviewed_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reviewed_by     INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "reviewed_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reviewed_at     TIMESTAMPTZ"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-anti-fraud-server-schema-sql-transaction-risk-scores",
    "sourceProject": "AIAntiFraud",
    "name": "transaction_risk_scores",
    "displayName": "Transaction Risk Scores",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "transaction_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transaction_id      INTEGER REFERENCES transactions(id) ON DELETE SET NULL"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id             INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "risk_score",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_score          INTEGER NOT NULL"
      },
      {
        "name": "risk_factors",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "risk_factors        JSONB NOT NULL DEFAULT '[]'"
      },
      {
        "name": "auto_alert_created",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "auto_alert_created  BOOLEAN NOT NULL DEFAULT FALSE"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used          VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-anti-fraud-server-schema-sql-transactions",
    "sourceProject": "AIAntiFraud",
    "name": "transactions",
    "displayName": "Transactions",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                    SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id               INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount                DECIMAL(15, 2) NOT NULL"
      },
      {
        "name": "currency",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'USD'",
        "sourceLine": "currency              VARCHAR(10) NOT NULL DEFAULT 'USD'"
      },
      {
        "name": "merchant_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "merchant_name         VARCHAR(255) NOT NULL"
      },
      {
        "name": "merchant_category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "merchant_category     VARCHAR(100)"
      },
      {
        "name": "card_number_last4",
        "type": "CHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "card_number_last4     CHAR(4)"
      },
      {
        "name": "ip_address",
        "type": "INET",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ip_address            INET"
      },
      {
        "name": "location_country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location_country      VARCHAR(100)"
      },
      {
        "name": "location_city",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location_city         VARCHAR(100)"
      },
      {
        "name": "device_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "device_id             VARCHAR(255)"
      },
      {
        "name": "is_online",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "is_online             BOOLEAN NOT NULL DEFAULT FALSE"
      },
      {
        "name": "status",
        "type": "transaction_status",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status                transaction_status NOT NULL DEFAULT 'pending'"
      },
      {
        "name": "risk_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_score            DECIMAL(5, 2) CHECK (risk_score >= 0 AND risk_score <= 100)"
      },
      {
        "name": "fraud_confirmed",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "fraud_confirmed       BOOLEAN NOT NULL DEFAULT FALSE"
      },
      {
        "name": "rule_triggered_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rule_triggered_id     INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-anti-fraud-server-schema-sql-users",
    "sourceProject": "AIAntiFraud",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id            SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email         VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password_hash",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password_hash VARCHAR(255) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          VARCHAR(255) NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'analyst'",
        "sourceLine": "role          VARCHAR(50) NOT NULL DEFAULT 'analyst' CHECK (role IN ('admin', 'analyst', 'reviewer'))"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "is_active     BOOLEAN NOT NULL DEFAULT TRUE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-anti-fraud-server-schema-sql-watchlist",
    "sourceProject": "AIAntiFraud",
    "name": "watchlist",
    "displayName": "Watchlist",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id            SERIAL PRIMARY KEY"
      },
      {
        "name": "entity_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_name   VARCHAR(255) NOT NULL"
      },
      {
        "name": "entity_type",
        "type": "entity_type_enum",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'individual'",
        "sourceLine": "entity_type   entity_type_enum NOT NULL DEFAULT 'individual'"
      },
      {
        "name": "identifier",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "identifier    VARCHAR(255)"
      },
      {
        "name": "reason",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason        TEXT"
      },
      {
        "name": "risk_level",
        "type": "risk_level_enum",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'high'",
        "sourceLine": "risk_level    risk_level_enum NOT NULL DEFAULT 'high'"
      },
      {
        "name": "source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source        VARCHAR(255)"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "is_active     BOOLEAN NOT NULL DEFAULT TRUE"
      },
      {
        "name": "added_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "added_by      INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-src-db-migrate-js-audit-trail",
    "sourceProject": "AICustoms",
    "name": "audit_trail",
    "displayName": "Audit Trail",
    "framework": "SQL",
    "sourceFile": "src/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action VARCHAR(100) NOT NULL"
      },
      {
        "name": "module",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "module VARCHAR(100)"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(100)"
      },
      {
        "name": "entity_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id VARCHAR(50)"
      },
      {
        "name": "user_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_name VARCHAR(255)"
      },
      {
        "name": "user_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_email VARCHAR(255)"
      },
      {
        "name": "details",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "details TEXT"
      },
      {
        "name": "ip_address",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ip_address VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "risk_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_level VARCHAR(20)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-database-schema-sql-audit-trail",
    "sourceProject": "AICustoms",
    "name": "audit_trail",
    "displayName": "Audit Trail",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action VARCHAR(100) NOT NULL"
      },
      {
        "name": "module",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "module VARCHAR(100)"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(100)"
      },
      {
        "name": "entity_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id VARCHAR(100)"
      },
      {
        "name": "user_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_name VARCHAR(255)"
      },
      {
        "name": "user_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_email VARCHAR(255)"
      },
      {
        "name": "details",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "details JSONB"
      },
      {
        "name": "ip_address",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ip_address VARCHAR(45)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "risk_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_level VARCHAR(50)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-src-db-migrate-js-compliance-screenings",
    "sourceProject": "AICustoms",
    "name": "compliance_screenings",
    "displayName": "Compliance Screenings",
    "framework": "SQL",
    "sourceFile": "src/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "entity_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_name VARCHAR(500) NOT NULL"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(100)"
      },
      {
        "name": "country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country VARCHAR(100)"
      },
      {
        "name": "screening_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "screening_type VARCHAR(100)"
      },
      {
        "name": "risk_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_level VARCHAR(20)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "match_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "match_score DECIMAL(5,2)"
      },
      {
        "name": "details",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "details TEXT"
      },
      {
        "name": "screened_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "screened_by VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-database-schema-sql-compliance-screenings",
    "sourceProject": "AICustoms",
    "name": "compliance_screenings",
    "displayName": "Compliance Screenings",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "entity_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(100)"
      },
      {
        "name": "country",
        "type": "CHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country CHAR(2)"
      },
      {
        "name": "screening_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "screening_type VARCHAR(50)"
      },
      {
        "name": "risk_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_level VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "match_score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "match_score INTEGER CHECK (match_score BETWEEN 0 AND 100)"
      },
      {
        "name": "details",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "details JSONB"
      },
      {
        "name": "screened_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "screened_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-src-db-migrate-js-country-regulations",
    "sourceProject": "AICustoms",
    "name": "country_regulations",
    "displayName": "Country Regulations",
    "framework": "SQL",
    "sourceFile": "src/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "country",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country VARCHAR(100) NOT NULL"
      },
      {
        "name": "country_code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country_code VARCHAR(5)"
      },
      {
        "name": "regulation_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "regulation_type VARCHAR(100)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(500)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "effective_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "effective_date DATE"
      },
      {
        "name": "expiry_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiry_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "authority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "authority VARCHAR(255)"
      },
      {
        "name": "restricted_items",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "restricted_items TEXT"
      },
      {
        "name": "documentation_required",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "documentation_required TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-src-db-migrate-js-customs-documents",
    "sourceProject": "AICustoms",
    "name": "customs_documents",
    "displayName": "Customs Documents",
    "framework": "SQL",
    "sourceFile": "src/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "document_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "document_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "reference_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reference_number VARCHAR(100)"
      },
      {
        "name": "shipper",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shipper VARCHAR(500)"
      },
      {
        "name": "consignee",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "consignee VARCHAR(500)"
      },
      {
        "name": "origin_country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "origin_country VARCHAR(100)"
      },
      {
        "name": "destination_country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "destination_country VARCHAR(100)"
      },
      {
        "name": "goods_description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "goods_description TEXT"
      },
      {
        "name": "declared_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "declared_value DECIMAL(15,2)"
      },
      {
        "name": "currency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'USD'",
        "sourceLine": "currency VARCHAR(10) DEFAULT 'USD'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-src-db-migrate-js-duty-calculations",
    "sourceProject": "AICustoms",
    "name": "duty_calculations",
    "displayName": "Duty Calculations",
    "framework": "SQL",
    "sourceFile": "src/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "product_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_name VARCHAR(500) NOT NULL"
      },
      {
        "name": "hs_code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hs_code VARCHAR(20)"
      },
      {
        "name": "origin_country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "origin_country VARCHAR(100)"
      },
      {
        "name": "destination_country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "destination_country VARCHAR(100)"
      },
      {
        "name": "declared_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "declared_value DECIMAL(15,2)"
      },
      {
        "name": "currency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'USD'",
        "sourceLine": "currency VARCHAR(10) DEFAULT 'USD'"
      },
      {
        "name": "duty_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duty_rate DECIMAL(5,2)"
      },
      {
        "name": "duty_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duty_amount DECIMAL(15,2)"
      },
      {
        "name": "tax_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_rate DECIMAL(5,2)"
      },
      {
        "name": "tax_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_amount DECIMAL(15,2)"
      },
      {
        "name": "total_fees",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_fees DECIMAL(15,2)"
      },
      {
        "name": "trade_agreement",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "trade_agreement VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-database-schema-sql-duty-calculations",
    "sourceProject": "AICustoms",
    "name": "duty_calculations",
    "displayName": "Duty Calculations",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "shipment_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shipment_id INTEGER REFERENCES shipments(id) ON DELETE SET NULL"
      },
      {
        "name": "product_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id INTEGER REFERENCES products(id) ON DELETE SET NULL"
      },
      {
        "name": "hs_code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hs_code VARCHAR(20)"
      },
      {
        "name": "origin_country",
        "type": "CHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "origin_country CHAR(2)"
      },
      {
        "name": "destination_country",
        "type": "CHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "destination_country CHAR(2)"
      },
      {
        "name": "declared_value",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "declared_value NUMERIC(15, 2)"
      },
      {
        "name": "currency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'USD'",
        "sourceLine": "currency VARCHAR(10) DEFAULT 'USD'"
      },
      {
        "name": "duty_rate",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duty_rate NUMERIC(8, 4)"
      },
      {
        "name": "duty_amount",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duty_amount NUMERIC(15, 2)"
      },
      {
        "name": "vat_rate",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vat_rate NUMERIC(8, 4)"
      },
      {
        "name": "vat_amount",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vat_amount NUMERIC(15, 2)"
      },
      {
        "name": "excise_tax",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "excise_tax NUMERIC(15, 2)"
      },
      {
        "name": "processing_fee",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "processing_fee NUMERIC(15, 2)"
      },
      {
        "name": "total_landed_cost",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_landed_cost NUMERIC(15, 2)"
      },
      {
        "name": "applicable_agreements",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "applicable_agreements JSONB"
      },
      {
        "name": "calculation_breakdown",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "calculation_breakdown JSONB"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "calculated_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "calculated_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "ai_model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'anthropic/claude-3-5-sonnet-20241022'",
        "sourceLine": "ai_model VARCHAR(100) DEFAULT 'anthropic/claude-3-5-sonnet-20241022'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-src-routes-gap-documents-lacks-ai-declaration-auto-generation-js-gap-features",
    "sourceProject": "AICustoms",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/routes/gap_documents_lacks_ai_declaration_auto_generation.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-src-routes-gap-duties-lacks-ai-tariff-optimization-endpoint-js-gap-features",
    "sourceProject": "AICustoms",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/routes/gap_duties_lacks_ai_tariff_optimization_endpoint.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-src-routes-gap-no-calendar-scheduling-js-gap-features",
    "sourceProject": "AICustoms",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/routes/gap_no_calendar_scheduling.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-src-routes-gap-no-mobile-api-surface-js-gap-features",
    "sourceProject": "AICustoms",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/routes/gap_no_mobile_api_surface.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-src-routes-gap-no-payment-duty-collection-workflow-js-gap-features",
    "sourceProject": "AICustoms",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/routes/gap_no_payment_duty_collection_workflow.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-src-routes-gap-no-sms-push-notifications-js-gap-features",
    "sourceProject": "AICustoms",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/routes/gap_no_sms_push_notifications.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-src-routes-gap-no-webhooks-for-carrier-or-government-api-pushes-js-gap-features",
    "sourceProject": "AICustoms",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/routes/gap_no_webhooks_for_carrier_or_government_api_pushes.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-src-routes-gap-sanctions-lacks-ai-risk-screening-agent-js-gap-features",
    "sourceProject": "AICustoms",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/routes/gap_sanctions_lacks_ai_risk_screening_agent.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-src-routes-gap-shipments-lacks-ai-delay-prediction-js-gap-features",
    "sourceProject": "AICustoms",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/routes/gap_shipments_lacks_ai_delay_prediction.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-database-schema-sql-generated-documents",
    "sourceProject": "AICustoms",
    "name": "generated_documents",
    "displayName": "Generated Documents",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "shipment_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shipment_id INTEGER REFERENCES shipments(id) ON DELETE SET NULL"
      },
      {
        "name": "document_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "document_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255)"
      },
      {
        "name": "reference_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reference_number VARCHAR(100)"
      },
      {
        "name": "content",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content JSONB"
      },
      {
        "name": "raw_text",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "raw_text TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'draft'"
      },
      {
        "name": "generated_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "generated_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "ai_model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'anthropic/claude-3-5-sonnet-20241022'",
        "sourceLine": "ai_model VARCHAR(100) DEFAULT 'anthropic/claude-3-5-sonnet-20241022'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-database-schema-sql-hs-classifications",
    "sourceProject": "AICustoms",
    "name": "hs_classifications",
    "displayName": "Hs Classifications",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "product_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id INTEGER REFERENCES products(id) ON DELETE SET NULL"
      },
      {
        "name": "shipment_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shipment_id INTEGER REFERENCES shipments(id) ON DELETE SET NULL"
      },
      {
        "name": "hs_code",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hs_code VARCHAR(20) NOT NULL"
      },
      {
        "name": "chapter",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "chapter VARCHAR(10)"
      },
      {
        "name": "section",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "section VARCHAR(10)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "duty_rate_estimate",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duty_rate_estimate VARCHAR(50)"
      },
      {
        "name": "confidence",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confidence INTEGER CHECK (confidence BETWEEN 0 AND 100)"
      },
      {
        "name": "reasoning",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reasoning TEXT"
      },
      {
        "name": "alternative_codes",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "alternative_codes JSONB"
      },
      {
        "name": "classified_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "classified_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "ai_model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'anthropic/claude-3-5-sonnet-20241022'",
        "sourceLine": "ai_model VARCHAR(100) DEFAULT 'anthropic/claude-3-5-sonnet-20241022'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-src-db-migrate-js-hs-codes",
    "sourceProject": "AICustoms",
    "name": "hs_codes",
    "displayName": "Hs Codes",
    "framework": "SQL",
    "sourceFile": "src/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "product_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_name VARCHAR(500) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "hs_code",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hs_code VARCHAR(20) NOT NULL"
      },
      {
        "name": "chapter",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "chapter VARCHAR(10)"
      },
      {
        "name": "section",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "section VARCHAR(10)"
      },
      {
        "name": "duty_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duty_rate DECIMAL(5,2)"
      },
      {
        "name": "country_origin",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country_origin VARCHAR(100)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-src-db-migrate-js-products",
    "sourceProject": "AICustoms",
    "name": "products",
    "displayName": "Products",
    "framework": "SQL",
    "sourceFile": "src/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "product_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_name VARCHAR(500) NOT NULL"
      },
      {
        "name": "sku",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sku VARCHAR(100)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(255)"
      },
      {
        "name": "hs_code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hs_code VARCHAR(20)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "country_origin",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country_origin VARCHAR(100)"
      },
      {
        "name": "unit_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_value DECIMAL(15,2)"
      },
      {
        "name": "currency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'USD'",
        "sourceLine": "currency VARCHAR(10) DEFAULT 'USD'"
      },
      {
        "name": "weight_kg",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "weight_kg DECIMAL(10,2)"
      },
      {
        "name": "material",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "material VARCHAR(255)"
      },
      {
        "name": "manufacturer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "manufacturer VARCHAR(500)"
      },
      {
        "name": "export_controlled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "export_controlled BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-database-schema-sql-products",
    "sourceProject": "AICustoms",
    "name": "products",
    "displayName": "Products",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "product_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "sku",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sku VARCHAR(100)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "hs_code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hs_code VARCHAR(20)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "country_origin",
        "type": "CHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country_origin CHAR(2)"
      },
      {
        "name": "unit_value",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_value NUMERIC(15, 2)"
      },
      {
        "name": "currency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'USD'",
        "sourceLine": "currency VARCHAR(10) DEFAULT 'USD'"
      },
      {
        "name": "weight_kg",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "weight_kg NUMERIC(10, 3)"
      },
      {
        "name": "material",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "material VARCHAR(255)"
      },
      {
        "name": "manufacturer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "manufacturer VARCHAR(255)"
      },
      {
        "name": "export_controlled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "export_controlled BOOLEAN DEFAULT false"
      },
      {
        "name": "eccn",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "eccn VARCHAR(50)"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-database-schema-sql-regulations",
    "sourceProject": "AICustoms",
    "name": "regulations",
    "displayName": "Regulations",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(500) NOT NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "country",
        "type": "CHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country CHAR(2)"
      },
      {
        "name": "regulation_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "regulation_number VARCHAR(100)"
      },
      {
        "name": "effective_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "effective_date DATE"
      },
      {
        "name": "expiry_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiry_date DATE"
      },
      {
        "name": "summary",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "summary TEXT"
      },
      {
        "name": "full_text",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "full_text TEXT"
      },
      {
        "name": "source_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_url TEXT"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-src-db-migrate-js-sanctions-screenings",
    "sourceProject": "AICustoms",
    "name": "sanctions_screenings",
    "displayName": "Sanctions Screenings",
    "framework": "SQL",
    "sourceFile": "src/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "entity_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_name VARCHAR(500) NOT NULL"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(100)"
      },
      {
        "name": "country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country VARCHAR(100)"
      },
      {
        "name": "sanctions_list",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sanctions_list VARCHAR(255)"
      },
      {
        "name": "risk_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_score DECIMAL(5,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "match_details",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "match_details TEXT"
      },
      {
        "name": "sanctions_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sanctions_type VARCHAR(100)"
      },
      {
        "name": "authority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "authority VARCHAR(255)"
      },
      {
        "name": "screened_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "screened_by VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-src-db-migrate-js-shipments",
    "sourceProject": "AICustoms",
    "name": "shipments",
    "displayName": "Shipments",
    "framework": "SQL",
    "sourceFile": "src/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "tracking_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tracking_number VARCHAR(100)"
      },
      {
        "name": "carrier",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "carrier VARCHAR(100)"
      },
      {
        "name": "origin_country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "origin_country VARCHAR(100)"
      },
      {
        "name": "destination_country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "destination_country VARCHAR(100)"
      },
      {
        "name": "shipper",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shipper VARCHAR(500)"
      },
      {
        "name": "consignee",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "consignee VARCHAR(500)"
      },
      {
        "name": "goods_description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "goods_description TEXT"
      },
      {
        "name": "declared_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "declared_value DECIMAL(15,2)"
      },
      {
        "name": "currency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'USD'",
        "sourceLine": "currency VARCHAR(10) DEFAULT 'USD'"
      },
      {
        "name": "weight_kg",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "weight_kg DECIMAL(10,2)"
      },
      {
        "name": "compliance_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "compliance_status VARCHAR(50)"
      },
      {
        "name": "customs_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customs_status VARCHAR(50)"
      },
      {
        "name": "estimated_arrival",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_arrival DATE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-database-schema-sql-shipments",
    "sourceProject": "AICustoms",
    "name": "shipments",
    "displayName": "Shipments",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "tracking_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tracking_number VARCHAR(100)"
      },
      {
        "name": "carrier",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "carrier VARCHAR(100)"
      },
      {
        "name": "origin_country",
        "type": "CHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "origin_country CHAR(2) NOT NULL"
      },
      {
        "name": "destination_country",
        "type": "CHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "destination_country CHAR(2) NOT NULL"
      },
      {
        "name": "shipper",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shipper VARCHAR(255)"
      },
      {
        "name": "consignee",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "consignee VARCHAR(255)"
      },
      {
        "name": "goods_description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "goods_description TEXT"
      },
      {
        "name": "declared_value",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "declared_value NUMERIC(15, 2)"
      },
      {
        "name": "currency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'USD'",
        "sourceLine": "currency VARCHAR(10) DEFAULT 'USD'"
      },
      {
        "name": "weight_kg",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "weight_kg NUMERIC(10, 3)"
      },
      {
        "name": "compliance_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "compliance_status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "customs_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "customs_status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "estimated_arrival",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_arrival DATE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-src-db-migrate-js-trade-agreements",
    "sourceProject": "AICustoms",
    "name": "trade_agreements",
    "displayName": "Trade Agreements",
    "framework": "SQL",
    "sourceFile": "src/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "agreement_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "agreement_name VARCHAR(500) NOT NULL"
      },
      {
        "name": "acronym",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "acronym VARCHAR(50)"
      },
      {
        "name": "member_countries",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "member_countries TEXT"
      },
      {
        "name": "effective_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "effective_date DATE"
      },
      {
        "name": "expiry_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiry_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "tariff_reduction",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tariff_reduction VARCHAR(100)"
      },
      {
        "name": "eligible_products",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "eligible_products TEXT"
      },
      {
        "name": "rules_of_origin",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rules_of_origin TEXT"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-database-schema-sql-trade-agreements",
    "sourceProject": "AICustoms",
    "name": "trade_agreements",
    "displayName": "Trade Agreements",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "abbreviation",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "abbreviation VARCHAR(50)"
      },
      {
        "name": "member_countries",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "member_countries TEXT[]"
      },
      {
        "name": "effective_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "effective_date DATE"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "benefits",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "benefits TEXT"
      },
      {
        "name": "rules_of_origin",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rules_of_origin TEXT"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-src-db-migrate-js-users",
    "sourceProject": "AICustoms",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "src/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password_hash",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password_hash VARCHAR(255) NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'analyst'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'analyst'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-customs-database-schema-sql-users",
    "sourceProject": "AICustoms",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password_hash",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password_hash VARCHAR(255) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'user'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'user'"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "last_login",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_login TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-audit-trail",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "audit_trail",
    "displayName": "Audit Trail",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(50)"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id INTEGER"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action VARCHAR(20)"
      },
      {
        "name": "changes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "changes TEXT"
      },
      {
        "name": "ip_address",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ip_address VARCHAR(50)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-compliance-documents",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "compliance_documents",
    "displayName": "Compliance Documents",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "supplier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_id INTEGER REFERENCES suppliers(id) ON DELETE CASCADE"
      },
      {
        "name": "document_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "document_name VARCHAR(255)"
      },
      {
        "name": "document_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "document_type VARCHAR(50)"
      },
      {
        "name": "expiry_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiry_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Valid'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'Valid'"
      },
      {
        "name": "issuing_authority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issuing_authority VARCHAR(255)"
      },
      {
        "name": "file_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_url TEXT"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-delivery-performance",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "delivery_performance",
    "displayName": "Delivery Performance",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "supplier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_id INTEGER REFERENCES suppliers(id) ON DELETE CASCADE"
      },
      {
        "name": "order_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id VARCHAR(50)"
      },
      {
        "name": "promised_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "promised_date DATE"
      },
      {
        "name": "actual_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actual_date DATE"
      },
      {
        "name": "quantity_ordered",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity_ordered INTEGER"
      },
      {
        "name": "quantity_delivered",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity_delivered INTEGER"
      },
      {
        "name": "quality_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quality_score DECIMAL(5,2)"
      },
      {
        "name": "on_time",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "on_time BOOLEAN DEFAULT false"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-esg-compliance",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "esg_compliance",
    "displayName": "Esg Compliance",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "supplier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_id INTEGER REFERENCES suppliers(id) ON DELETE CASCADE"
      },
      {
        "name": "environmental_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "environmental_score DECIMAL(5,2)"
      },
      {
        "name": "social_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "social_score DECIMAL(5,2)"
      },
      {
        "name": "governance_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "governance_score DECIMAL(5,2)"
      },
      {
        "name": "overall_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "overall_score DECIMAL(5,2)"
      },
      {
        "name": "carbon_footprint",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "carbon_footprint VARCHAR(20)"
      },
      {
        "name": "labor_practices",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "labor_practices VARCHAR(20)"
      },
      {
        "name": "board_diversity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "board_diversity VARCHAR(20)"
      },
      {
        "name": "sustainability_report",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "sustainability_report BOOLEAN DEFAULT false"
      },
      {
        "name": "compliance_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "compliance_status VARCHAR(50)"
      },
      {
        "name": "certifications",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "certifications TEXT"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-routes-gap-no-e-signature-workflow-for-contract-obligations-js-gap-features",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoESignatureWorkflowForContractObligations.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-routes-gap-no-esg-controversy-news-scanner-ai-js-gap-features",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoEsgControversyNewsScannerAi.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-routes-gap-no-integration-with-dun-bradstreet-or-financial-data-js-gap-features",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoIntegrationWithDunBradstreetOrFinancialData.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-routes-gap-no-predictive-bankruptcy-scoring-js-gap-features",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoPredictiveBankruptcyScoring.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-routes-gap-no-supplier-onboarding-workflow-with-automated-document-collection-js-gap-features",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoSupplierOnboardingWorkflowWithAutomatedDocumentCollection.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-routes-gap-no-supplier-portal-for-self-service-compliance-updates-js-gap-features",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoSupplierPortalForSelfServiceComplianceUpdates.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-routes-gap-no-supply-chain-network-n-tier-risk-analysis-ai-js-gap-features",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoSupplyChainNetworkNTierRiskAnalysisAi.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-routes-gap-no-third-party-risk-aggregation-feeds-pci-certifications-js-gap-features",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoThirdPartyRiskAggregationFeedsPciCertifications.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-routes-gap-no-webhooks-for-alert-delivery-js-gap-features",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoWebhooksForAlertDelivery.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-geopolitical-risks",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "geopolitical_risks",
    "displayName": "Geopolitical Risks",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "supplier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_id INTEGER REFERENCES suppliers(id) ON DELETE CASCADE"
      },
      {
        "name": "country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country VARCHAR(100)"
      },
      {
        "name": "region",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "region VARCHAR(100)"
      },
      {
        "name": "risk_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_score DECIMAL(5,2)"
      },
      {
        "name": "political_stability",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "political_stability VARCHAR(20)"
      },
      {
        "name": "trade_restrictions",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "trade_restrictions VARCHAR(20)"
      },
      {
        "name": "sanctions_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sanctions_status VARCHAR(50)"
      },
      {
        "name": "conflict_zone",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "conflict_zone BOOLEAN DEFAULT false"
      },
      {
        "name": "currency_risk",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currency_risk VARCHAR(20)"
      },
      {
        "name": "regulatory_risk",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "regulatory_risk VARCHAR(20)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-notifications",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "notifications",
    "displayName": "Notifications",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "supplier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_id INTEGER REFERENCES suppliers(id) ON DELETE SET NULL"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(50) NOT NULL"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'info'",
        "sourceLine": "severity VARCHAR(20) DEFAULT 'info'"
      },
      {
        "name": "read",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "read BOOLEAN DEFAULT false"
      },
      {
        "name": "link",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "link VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-risk-alerts",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "risk_alerts",
    "displayName": "Risk Alerts",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "supplier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_id INTEGER REFERENCES suppliers(id) ON DELETE CASCADE"
      },
      {
        "name": "alert_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "alert_type VARCHAR(50)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(20)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Open'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'Open'"
      },
      {
        "name": "triggered_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "triggered_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "resolved_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolved_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-risk-reports",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "risk_reports",
    "displayName": "Risk Reports",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255)"
      },
      {
        "name": "report_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "report_type VARCHAR(50)"
      },
      {
        "name": "supplier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_id INTEGER REFERENCES suppliers(id) ON DELETE SET NULL"
      },
      {
        "name": "content",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content TEXT"
      },
      {
        "name": "generated_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "generated_by INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Draft'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'Draft'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-spend-analysis",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "spend_analysis",
    "displayName": "Spend Analysis",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "supplier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_id INTEGER REFERENCES suppliers(id) ON DELETE CASCADE"
      },
      {
        "name": "period",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period VARCHAR(20)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(50)"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(15,2)"
      },
      {
        "name": "budget",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budget DECIMAL(15,2)"
      },
      {
        "name": "currency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'USD'",
        "sourceLine": "currency VARCHAR(10) DEFAULT 'USD'"
      },
      {
        "name": "department",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "department VARCHAR(50)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-supplier-contacts",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "supplier_contacts",
    "displayName": "Supplier Contacts",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "supplier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_id INTEGER REFERENCES suppliers(id) ON DELETE CASCADE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(100)"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(50)"
      },
      {
        "name": "department",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "department VARCHAR(50)"
      },
      {
        "name": "is_primary",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_primary BOOLEAN DEFAULT false"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-suppliers",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "suppliers",
    "displayName": "Suppliers",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country VARCHAR(100)"
      },
      {
        "name": "industry",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "industry VARCHAR(100)"
      },
      {
        "name": "revenue",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "revenue DECIMAL(15,2)"
      },
      {
        "name": "credit_rating",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "credit_rating VARCHAR(10)"
      },
      {
        "name": "stock_symbol",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stock_symbol VARCHAR(20)"
      },
      {
        "name": "financial_health_score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "50",
        "sourceLine": "financial_health_score INTEGER DEFAULT 50"
      },
      {
        "name": "risk_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Medium'",
        "sourceLine": "risk_level VARCHAR(20) DEFAULT 'Medium'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-users",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password_hash",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password_hash VARCHAR(255) NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'analyst'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'analyst'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-vendor-contracts",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "vendor_contracts",
    "displayName": "Vendor Contracts",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "supplier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_id INTEGER REFERENCES suppliers(id) ON DELETE CASCADE"
      },
      {
        "name": "contract_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contract_number VARCHAR(50)"
      },
      {
        "name": "contract_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contract_type VARCHAR(50)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "value DECIMAL(15,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Active'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'Active'"
      },
      {
        "name": "payment_terms",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_terms VARCHAR(50)"
      },
      {
        "name": "auto_renewal",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "auto_renewal BOOLEAN DEFAULT false"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-backend-src-seed-js-watchlist",
    "sourceProject": "AIVendorRiskPerformanceScorer",
    "name": "watchlist",
    "displayName": "Watchlist",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "supplier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier_id INTEGER REFERENCES suppliers(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "reason",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason TEXT"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Medium'",
        "sourceLine": "priority VARCHAR(20) DEFAULT 'Medium'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Active'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'Active'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-visual-qa-inspector-backend-models-index-js-ai-reports",
    "sourceProject": "AIVisualQAInspector",
    "name": "ai_reports",
    "displayName": "Ai Reports",
    "framework": "Sequelize",
    "sourceFile": "backend/models/index.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "product_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id: { ... }"
      },
      {
        "name": "report_name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "report_name: { ... }"
      },
      {
        "name": "report_type",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "report_type: { ... }"
      },
      {
        "name": "report_scope",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "report_scope: { ... }"
      },
      {
        "name": "include_data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "include_data: { ... }"
      },
      {
        "name": "executive_summary",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "executive_summary: { ... }"
      },
      {
        "name": "sections",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sections: { ... }"
      },
      {
        "name": "recommendations",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommendations: { ... }"
      },
      {
        "name": "ai_analysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_analysis: { ... }"
      }
    ]
  },
  {
    "id": "ai-visual-qa-inspector-backend-models-index-js-defect-classifications",
    "sourceProject": "AIVisualQAInspector",
    "name": "defect_classifications",
    "displayName": "Defect Classifications",
    "framework": "Sequelize",
    "sourceFile": "backend/models/index.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "defect_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "defect_id: { ... }"
      },
      {
        "name": "product_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id: { ... }"
      },
      {
        "name": "defect_name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "defect_name: { ... }"
      },
      {
        "name": "defect_description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "defect_description: { ... }"
      },
      {
        "name": "category",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category: { ... }"
      },
      {
        "name": "sub_category",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sub_category: { ... }"
      },
      {
        "name": "confidence_score",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confidence_score: { ... }"
      },
      {
        "name": "ai_analysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_analysis: { ... }"
      }
    ]
  },
  {
    "id": "ai-visual-qa-inspector-backend-models-index-js-defects",
    "sourceProject": "AIVisualQAInspector",
    "name": "defects",
    "displayName": "Defects",
    "framework": "Sequelize",
    "sourceFile": "backend/models/index.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "inspection_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspection_id: { ... }"
      },
      {
        "name": "product_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id: { ... }"
      },
      {
        "name": "defect_type",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "defect_type: { ... }"
      },
      {
        "name": "severity",
        "type": "ENUM('critical'",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity: { ... }"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description: { ... }"
      },
      {
        "name": "location",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location: { ... }"
      },
      {
        "name": "image_url",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "image_url: { ... }"
      },
      {
        "name": "ai_analysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_analysis: { ... }"
      }
    ]
  },
  {
    "id": "ai-visual-qa-inspector-backend-routes-gap-limited-integration-with-production-line-cameras-only-generic-integrations-js-gap-features",
    "sourceProject": "AIVisualQAInspector",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapLimitedIntegrationWithProductionLineCamerasOnlyGenericIntegrations.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-visual-qa-inspector-backend-routes-gap-no-automated-root-cause-correlation-ml-js-gap-features",
    "sourceProject": "AIVisualQAInspector",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapNoAutomatedRootCauseCorrelationMl.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-visual-qa-inspector-backend-routes-gap-no-computer-vision-for-direct-defect-detection-from-js-gap-features",
    "sourceProject": "AIVisualQAInspector",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapNoComputerVisionForDirectDefectDetectionFrom.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-visual-qa-inspector-backend-routes-gap-no-erp-integration-for-rework-scrap-tracking-js-gap-features",
    "sourceProject": "AIVisualQAInspector",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapNoErpIntegrationForReworkScrapTracking.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-visual-qa-inspector-backend-routes-gap-no-notifications-subsystem-js-gap-features",
    "sourceProject": "AIVisualQAInspector",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapNoNotificationsSubsystem.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-visual-qa-inspector-backend-routes-gap-no-predictive-quality-scoring-for-upcoming-production-runs-js-gap-features",
    "sourceProject": "AIVisualQAInspector",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapNoPredictiveQualityScoringForUpcomingProductionRuns.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-visual-qa-inspector-backend-routes-gap-no-real-time-spc-statistical-process-control-visualization-js-gap-features",
    "sourceProject": "AIVisualQAInspector",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapNoRealTimeSpcStatisticalProcessControlVisualization.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-visual-qa-inspector-backend-routes-gap-no-supplier-quality-management-module-js-gap-features",
    "sourceProject": "AIVisualQAInspector",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapNoSupplierQualityManagementModule.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-visual-qa-inspector-backend-routes-gap-no-webhooks-for-mes-events-beyond-the-alert-js-gap-features",
    "sourceProject": "AIVisualQAInspector",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapNoWebhooksForMesEventsBeyondTheAlert.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-visual-qa-inspector-backend-models-index-js-inspection-reports",
    "sourceProject": "AIVisualQAInspector",
    "name": "inspection_reports",
    "displayName": "Inspection Reports",
    "framework": "Sequelize",
    "sourceFile": "backend/models/index.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "inspection_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspection_id: { ... }"
      },
      {
        "name": "report_data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "report_data: { ... }"
      }
    ]
  },
  {
    "id": "ai-visual-qa-inspector-backend-models-index-js-inspections",
    "sourceProject": "AIVisualQAInspector",
    "name": "inspections",
    "displayName": "Inspections",
    "framework": "Sequelize",
    "sourceFile": "backend/models/index.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "product_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id: { ... }"
      },
      {
        "name": "inspector_name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspector_name: { ... }"
      },
      {
        "name": "status",
        "type": "ENUM('pending'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status: { ... }"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes: { ... }"
      },
      {
        "name": "image_url",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "image_url: { ... }"
      },
      {
        "name": "ai_analysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_analysis: { ... }"
      }
    ]
  },
  {
    "id": "ai-visual-qa-inspector-backend-models-index-js-packaging-optimizations",
    "sourceProject": "AIVisualQAInspector",
    "name": "packaging_optimizations",
    "displayName": "Packaging Optimizations",
    "framework": "Sequelize",
    "sourceFile": "backend/models/index.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "product_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id: { ... }"
      },
      {
        "name": "optimization_name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "optimization_name: { ... }"
      },
      {
        "name": "current_packaging",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "current_packaging: { ... }"
      },
      {
        "name": "product_dimensions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_dimensions: { ... }"
      },
      {
        "name": "product_weight",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_weight: { ... }"
      },
      {
        "name": "fragility_level",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fragility_level: { ... }"
      },
      {
        "name": "shipping_requirements",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shipping_requirements: { ... }"
      },
      {
        "name": "optimization_goals",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "optimization_goals: { ... }"
      },
      {
        "name": "recommended_packaging",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommended_packaging: { ... }"
      },
      {
        "name": "cost_analysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost_analysis: { ... }"
      },
      {
        "name": "environmental_impact",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "environmental_impact: { ... }"
      },
      {
        "name": "ai_analysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_analysis: { ... }"
      }
    ]
  },
  {
    "id": "ai-visual-qa-inspector-backend-models-index-js-products",
    "sourceProject": "AIVisualQAInspector",
    "name": "products",
    "displayName": "Products",
    "framework": "Sequelize",
    "sourceFile": "backend/models/index.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name: { ... }"
      },
      {
        "name": "sku",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "sku: { ... }"
      },
      {
        "name": "category",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category: { ... }"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description: { ... }"
      },
      {
        "name": "image_url",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "image_url: { ... }"
      }
    ]
  },
  {
    "id": "ai-visual-qa-inspector-backend-models-index-js-quality-inspections",
    "sourceProject": "AIVisualQAInspector",
    "name": "quality_inspections",
    "displayName": "Quality Inspections",
    "framework": "Sequelize",
    "sourceFile": "backend/models/index.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "product_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id: { ... }"
      },
      {
        "name": "inspection_name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspection_name: { ... }"
      },
      {
        "name": "batch_number",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "batch_number: { ... }"
      },
      {
        "name": "inspection_type",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspection_type: { ... }"
      },
      {
        "name": "inspector_name",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspector_name: { ... }"
      },
      {
        "name": "status",
        "type": "ENUM('pending'",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status: { ... }"
      },
      {
        "name": "quality_score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quality_score: { ... }"
      },
      {
        "name": "parameters",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parameters: { ... }"
      },
      {
        "name": "findings",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "findings: { ... }"
      },
      {
        "name": "ai_analysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_analysis: { ... }"
      }
    ]
  },
  {
    "id": "ai-visual-qa-inspector-backend-models-index-js-root-cause-analyses",
    "sourceProject": "AIVisualQAInspector",
    "name": "root_cause_analyses",
    "displayName": "Root Cause Analyses",
    "framework": "Sequelize",
    "sourceFile": "backend/models/index.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "defect_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "defect_id: { ... }"
      },
      {
        "name": "product_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id: { ... }"
      },
      {
        "name": "problem_name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "problem_name: { ... }"
      },
      {
        "name": "problem_description",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "problem_description: { ... }"
      },
      {
        "name": "root_causes",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "root_causes: { ... }"
      },
      {
        "name": "contributing_factors",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contributing_factors: { ... }"
      },
      {
        "name": "corrective_actions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "corrective_actions: { ... }"
      },
      {
        "name": "preventive_measures",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "preventive_measures: { ... }"
      },
      {
        "name": "ai_analysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_analysis: { ... }"
      }
    ]
  },
  {
    "id": "ai-visual-qa-inspector-backend-models-index-js-severity-scores",
    "sourceProject": "AIVisualQAInspector",
    "name": "severity_scores",
    "displayName": "Severity Scores",
    "framework": "Sequelize",
    "sourceFile": "backend/models/index.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "defect_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "defect_id: { ... }"
      },
      {
        "name": "product_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id: { ... }"
      },
      {
        "name": "issue_name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issue_name: { ... }"
      },
      {
        "name": "issue_description",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issue_description: { ... }"
      },
      {
        "name": "severity_level",
        "type": "ENUM('critical'",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity_level: { ... }"
      },
      {
        "name": "severity_score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity_score: { ... }"
      },
      {
        "name": "impact_analysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "impact_analysis: { ... }"
      },
      {
        "name": "ai_analysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_analysis: { ... }"
      }
    ]
  },
  {
    "id": "ai-visual-qa-inspector-backend-models-index-js-trend-analyses",
    "sourceProject": "AIVisualQAInspector",
    "name": "trend_analyses",
    "displayName": "Trend Analyses",
    "framework": "Sequelize",
    "sourceFile": "backend/models/index.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "product_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id: { ... }"
      },
      {
        "name": "trend_name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "trend_name: { ... }"
      },
      {
        "name": "analysis_period",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "analysis_period: { ... }"
      },
      {
        "name": "trend_type",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "trend_type: { ... }"
      },
      {
        "name": "data_points",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "data_points: { ... }"
      },
      {
        "name": "metrics",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "metrics: { ... }"
      },
      {
        "name": "patterns",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patterns: { ... }"
      },
      {
        "name": "predictions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "predictions: { ... }"
      },
      {
        "name": "ai_analysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_analysis: { ... }"
      }
    ]
  },
  {
    "id": "ai-visual-qa-inspector-backend-models-index-js-users",
    "sourceProject": "AIVisualQAInspector",
    "name": "users",
    "displayName": "Users",
    "framework": "Sequelize",
    "sourceFile": "backend/models/index.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "email",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email: { ... }"
      },
      {
        "name": "password",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password: { ... }"
      },
      {
        "name": "name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name: { ... }"
      }
    ]
  }
];
