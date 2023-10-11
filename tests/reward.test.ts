import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Accrued } from "../generated/schema"
import { Accrued as AccruedEvent } from "../generated/Reward/Reward"
import { handleAccrued } from "../src/Reward"
import { createAccruedEvent } from "./reward-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let asset = Address.fromString("0x0000000000000000000000000000000000000001")
    let reward = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let assetIndex = BigInt.fromI32(234)
    let userIndex = BigInt.fromI32(234)
    let rewardsAccrued = BigInt.fromI32(234)
    let newAccruedEvent = createAccruedEvent(
      asset,
      reward,
      user,
      assetIndex,
      userIndex,
      rewardsAccrued
    )
    handleAccrued(newAccruedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Accrued created and stored", () => {
    assert.entityCount("Accrued", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Accrued",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "asset",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Accrued",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "reward",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Accrued",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Accrued",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "assetIndex",
      "234"
    )
    assert.fieldEquals(
      "Accrued",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "userIndex",
      "234"
    )
    assert.fieldEquals(
      "Accrued",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "rewardsAccrued",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
