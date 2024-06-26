---
sidebar_position: 11
---

# Setting up Intents

Intents are a set of user-supplied conditions under which a keychain signs a transaction with a private key. They are predicates over transactional data and external inputs; an arbitrary on-chain code evaluated at runtime by the settlement layer that enforces the terms of an interaction in a transparent, human-readable form. 

On SpaceWard, a user can set up their own intents as conditions to get transactions approved, such as who needs to approve a transaction or the notional fiat value of a transaction (coming soon).

To create your own intents, click on the **Intents** section on the navigation menu.

Secondly click on **Create a new intent**


![Create a new intent](https://i.ibb.co/M6js9Gx/createnewintent.png)

A new screen will appear with the type of condition that we want to configure our intent with. Current deployment only supports the following conditions:

 - **Joint approval** - Everyone in the intent needs to approve.
 - **Approval by certain amount** - Reaching a minimum threshold (i.e. 2 out of 3).
 - **Approval by anyone** - A single approval allows the intent to be satisfied and the transaction to proceed.

![Condition configurator](https://i.ibb.co/jvGr0PT/typeofcondition.png)

After this screen you will need to configure accordingly to the type of condition that you had previously selected introducing the accounts that will participate in the intent. 