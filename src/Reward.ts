import {
  Accrued as AccruedEvent,
  AssetConfigUpdated as AssetConfigUpdatedEvent,
  ClaimerSet as ClaimerSetEvent,
  RewardsClaimed as RewardsClaimedEvent,
  TransferStrategyInstalled as TransferStrategyInstalledEvent
} from "../generated/Reward/Reward"
import {
  User,
  Reward,
  Accrued,
  AssetConfigUpdated,
  ClaimerSet,
  RewardsClaimed,
  TransferStrategyInstalled
} from "../generated/schema"

export function handleAccrued(event: AccruedEvent): void {
  let accrued = new Accrued(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  accrued.asset = event.params.asset
  accrued.reward = event.params.reward
  accrued.user = event.params.user
  accrued.assetIndex = event.params.assetIndex
  accrued.userIndex = event.params.userIndex
  accrued.rewardsAccrued = event.params.rewardsAccrued

  accrued.blockNumber = event.block.number
  accrued.blockTimestamp = event.block.timestamp
  accrued.transactionHash = event.transaction.hash

  accrued.save()

  let user = User.load(event.params.user);
  if (!user) {
    user = new User(event.params.user);
    user.save();
  }

  let reward = Reward.load(event.params.reward);
  if (!reward) {
    reward = new Reward(event.params.reward);
    reward.save();
  }
}

export function handleAssetConfigUpdated(event: AssetConfigUpdatedEvent): void {
  let entity = new AssetConfigUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.asset = event.params.asset
  entity.reward = event.params.reward
  entity.oldEmission = event.params.oldEmission
  entity.newEmission = event.params.newEmission
  entity.oldDistributionEnd = event.params.oldDistributionEnd
  entity.newDistributionEnd = event.params.newDistributionEnd
  entity.assetIndex = event.params.assetIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
  
  let reward = Reward.load(event.params.reward);
  if (!reward) {
    reward = new Reward(event.params.reward);
    reward.save();
  }
}

export function handleClaimerSet(event: ClaimerSetEvent): void {
  let entity = new ClaimerSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.claimer = event.params.claimer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
  
}

export function handleRewardsClaimed(event: RewardsClaimedEvent): void {
  let entity = new RewardsClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.reward = event.params.reward
  entity.to = event.params.to
  entity.claimer = event.params.claimer
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let user = User.load(event.params.user);
  if (!user) {
    user = new User(event.params.user);
    user.save();
  }

  let reward = Reward.load(event.params.reward);
  if (!reward) {
    reward = new Reward(event.params.reward);
    reward.save();
  }
}

export function handleTransferStrategyInstalled(
  event: TransferStrategyInstalledEvent
): void {
  let entity = new TransferStrategyInstalled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.reward = event.params.reward
  entity.transferStrategy = event.params.transferStrategy

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let reward = Reward.load(event.params.reward);
  if (!reward) {
    reward = new Reward(event.params.reward);
    reward.save();
  }
}
