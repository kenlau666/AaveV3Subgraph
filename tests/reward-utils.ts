import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Accrued,
  AssetConfigUpdated,
  ClaimerSet,
  RewardOracleUpdated,
  RewardsClaimed,
  TransferStrategyInstalled
} from "../generated/Reward/Reward"

export function createAccruedEvent(
  asset: Address,
  reward: Address,
  user: Address,
  assetIndex: BigInt,
  userIndex: BigInt,
  rewardsAccrued: BigInt
): Accrued {
  let accruedEvent = changetype<Accrued>(newMockEvent())

  accruedEvent.parameters = new Array()

  accruedEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  accruedEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromAddress(reward))
  )
  accruedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  accruedEvent.parameters.push(
    new ethereum.EventParam(
      "assetIndex",
      ethereum.Value.fromUnsignedBigInt(assetIndex)
    )
  )
  accruedEvent.parameters.push(
    new ethereum.EventParam(
      "userIndex",
      ethereum.Value.fromUnsignedBigInt(userIndex)
    )
  )
  accruedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardsAccrued",
      ethereum.Value.fromUnsignedBigInt(rewardsAccrued)
    )
  )

  return accruedEvent
}

export function createAssetConfigUpdatedEvent(
  asset: Address,
  reward: Address,
  oldEmission: BigInt,
  newEmission: BigInt,
  oldDistributionEnd: BigInt,
  newDistributionEnd: BigInt,
  assetIndex: BigInt
): AssetConfigUpdated {
  let assetConfigUpdatedEvent = changetype<AssetConfigUpdated>(newMockEvent())

  assetConfigUpdatedEvent.parameters = new Array()

  assetConfigUpdatedEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  assetConfigUpdatedEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromAddress(reward))
  )
  assetConfigUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldEmission",
      ethereum.Value.fromUnsignedBigInt(oldEmission)
    )
  )
  assetConfigUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newEmission",
      ethereum.Value.fromUnsignedBigInt(newEmission)
    )
  )
  assetConfigUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldDistributionEnd",
      ethereum.Value.fromUnsignedBigInt(oldDistributionEnd)
    )
  )
  assetConfigUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newDistributionEnd",
      ethereum.Value.fromUnsignedBigInt(newDistributionEnd)
    )
  )
  assetConfigUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "assetIndex",
      ethereum.Value.fromUnsignedBigInt(assetIndex)
    )
  )

  return assetConfigUpdatedEvent
}

export function createClaimerSetEvent(
  user: Address,
  claimer: Address
): ClaimerSet {
  let claimerSetEvent = changetype<ClaimerSet>(newMockEvent())

  claimerSetEvent.parameters = new Array()

  claimerSetEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  claimerSetEvent.parameters.push(
    new ethereum.EventParam("claimer", ethereum.Value.fromAddress(claimer))
  )

  return claimerSetEvent
}

export function createRewardOracleUpdatedEvent(
  reward: Address,
  rewardOracle: Address
): RewardOracleUpdated {
  let rewardOracleUpdatedEvent = changetype<RewardOracleUpdated>(newMockEvent())

  rewardOracleUpdatedEvent.parameters = new Array()

  rewardOracleUpdatedEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromAddress(reward))
  )
  rewardOracleUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardOracle",
      ethereum.Value.fromAddress(rewardOracle)
    )
  )

  return rewardOracleUpdatedEvent
}

export function createRewardsClaimedEvent(
  user: Address,
  reward: Address,
  to: Address,
  claimer: Address,
  amount: BigInt
): RewardsClaimed {
  let rewardsClaimedEvent = changetype<RewardsClaimed>(newMockEvent())

  rewardsClaimedEvent.parameters = new Array()

  rewardsClaimedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  rewardsClaimedEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromAddress(reward))
  )
  rewardsClaimedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  rewardsClaimedEvent.parameters.push(
    new ethereum.EventParam("claimer", ethereum.Value.fromAddress(claimer))
  )
  rewardsClaimedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return rewardsClaimedEvent
}

export function createTransferStrategyInstalledEvent(
  reward: Address,
  transferStrategy: Address
): TransferStrategyInstalled {
  let transferStrategyInstalledEvent = changetype<TransferStrategyInstalled>(
    newMockEvent()
  )

  transferStrategyInstalledEvent.parameters = new Array()

  transferStrategyInstalledEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromAddress(reward))
  )
  transferStrategyInstalledEvent.parameters.push(
    new ethereum.EventParam(
      "transferStrategy",
      ethereum.Value.fromAddress(transferStrategy)
    )
  )

  return transferStrategyInstalledEvent
}
