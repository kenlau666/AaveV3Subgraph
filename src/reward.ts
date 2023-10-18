import {
  Accrued as AccruedEvent,
  AssetConfigUpdated as AssetConfigUpdatedEvent,
  ClaimerSet as ClaimerSetEvent,
  RewardsClaimed as RewardsClaimedEvent,
  TransferStrategyInstalled as TransferStrategyInstalledEvent,
} from "../generated/Reward/Reward";
import {
  User,
  Reward,
  Accrued,
  AssetConfigUpdated,
  ClaimerSet,
  RewardsClaimed,
  TransferStrategyInstalled,
} from "../generated/schema";

export function handleAccrued(event: AccruedEvent): void {
  let accrued = Accrued.load(event.transaction.hash.toHexString());
  if (!accrued) {
    let accrued = new Accrued(event.transaction.hash.toHexString());

    accrued.asset = event.params.asset;
    accrued.reward = event.params.reward.toHexString();
    accrued.user = event.params.user.toHexString();
    accrued.assetIndex = event.params.assetIndex;
    accrued.userIndex = event.params.userIndex;
    accrued.rewardsAccrued = event.params.rewardsAccrued;

    accrued.blockNumber = event.block.number;
    accrued.blockTimestamp = event.block.timestamp;
    accrued.transactionHash = event.transaction.hash;

    accrued.save();
  }

  let user = User.load(event.params.user.toHexString());
  if (!user) {
    user = new User(event.params.user.toHexString());
    user.address = event.params.user;
    user.save();
  }

  let reward = Reward.load(event.params.reward.toHexString());
  if (!reward) {
    reward = new Reward(event.params.reward.toHexString());
    reward.address = event.params.reward;
    reward.save();
  }
}

export function handleAssetConfigUpdated(event: AssetConfigUpdatedEvent): void {
  let entity = AssetConfigUpdated.load(event.transaction.hash.toHexString());
  if (!entity) {
    let entity = new AssetConfigUpdated(event.transaction.hash.toHexString());

    entity.asset = event.params.asset;
    entity.reward = event.params.reward.toHexString();
    entity.oldEmission = event.params.oldEmission;
    entity.newEmission = event.params.newEmission;
    entity.oldDistributionEnd = event.params.oldDistributionEnd;
    entity.newDistributionEnd = event.params.newDistributionEnd;
    entity.assetIndex = event.params.assetIndex;

    entity.blockNumber = event.block.number;
    entity.blockTimestamp = event.block.timestamp;
    entity.transactionHash = event.transaction.hash;

    entity.save();
  }

  let reward = Reward.load(event.params.reward.toHexString());
  if (!reward) {
    reward = new Reward(event.params.reward.toHexString());
    reward.address = event.params.reward;
    reward.save();
  }
}

export function handleClaimerSet(event: ClaimerSetEvent): void {
  let entity = ClaimerSet.load(event.transaction.hash.toHexString());
  if (!entity) {
    let entity = new ClaimerSet(event.transaction.hash.toHexString());
    entity.user = event.params.user.toHexString();
    entity.claimer = event.params.claimer;

    entity.blockNumber = event.block.number;
    entity.blockTimestamp = event.block.timestamp;
    entity.transactionHash = event.transaction.hash;

    entity.save();
  }

  let user = User.load(event.params.user.toHexString());
  if (!user) {
    user = new User(event.params.user.toHexString());
    user.address = event.params.user;
    user.save();
  }
}

export function handleRewardsClaimed(event: RewardsClaimedEvent): void {
  let rewardsClaimed = RewardsClaimed.load(event.transaction.hash.toHexString());
  if (!rewardsClaimed) {
    let rewardsClaimed = new RewardsClaimed(event.transaction.hash.toHexString());
    rewardsClaimed.user = event.params.user.toHexString();
    rewardsClaimed.reward = event.params.reward.toHexString();
    rewardsClaimed.to = event.params.to;
    rewardsClaimed.claimer = event.params.claimer;
    rewardsClaimed.amount = event.params.amount;

    rewardsClaimed.blockNumber = event.block.number;
    rewardsClaimed.blockTimestamp = event.block.timestamp;
    rewardsClaimed.transactionHash = event.transaction.hash;

    rewardsClaimed.save();
  }

  let user = User.load(event.params.user.toHexString());
  if (!user) {
    user = new User(event.params.user.toHexString());
    user.address = event.params.user;
    user.save();
  }

  let reward = Reward.load(event.params.reward.toHexString());
  if (!reward) {
    reward = new Reward(event.params.reward.toHexString());
    reward.address = event.params.reward;
    reward.save();
  }
}

export function handleTransferStrategyInstalled(
  event: TransferStrategyInstalledEvent
): void {
  let entity = TransferStrategyInstalled.load(
    event.transaction.hash.toHexString()
  );
  if (!entity) {
    let entity = new TransferStrategyInstalled(
      event.transaction.hash.toHexString()
    );
    entity.reward = event.params.reward.toHexString();
    entity.transferStrategy = event.params.transferStrategy;

    entity.blockNumber = event.block.number;
    entity.blockTimestamp = event.block.timestamp;
    entity.transactionHash = event.transaction.hash;

    entity.save();
  }

  let reward = Reward.load(event.params.reward.toHexString());
  if (!reward) {
    reward = new Reward(event.params.reward.toHexString());
    reward.address = event.params.reward;
    reward.save();
  }
}
