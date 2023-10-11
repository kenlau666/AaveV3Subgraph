import {
  BackUnbacked as BackUnbackedEvent,
  Borrow as BorrowEvent,
  FlashLoan as FlashLoanEvent,
  LiquidationCall as LiquidationCallEvent,
  MintUnbacked as MintUnbackedEvent,
  RebalanceStableBorrowRate as RebalanceStableBorrowRateEvent,
  Repay as RepayEvent,
  Supply as SupplyEvent,
  SwapBorrowRateMode as SwapBorrowRateModeEvent,
  UserEModeSet as UserEModeSetEvent,
  Withdraw as WithdrawEvent
} from "../generated/Pool/Pool"
import {
  User,
  BackUnbacked,
  Borrow,
  FlashLoan,
  LiquidationCall,
  MintUnbacked,
  RebalanceStableBorrowRate,
  Repay,
  Supply,
  SwapBorrowRateMode,
  UserEModeSet,
  Withdraw
} from "../generated/schema"

export function handleBackUnbacked(event: BackUnbackedEvent): void {
  let backUnbacked = new BackUnbacked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  backUnbacked.reserve = event.params.reserve
  backUnbacked.backer = event.params.backer
  backUnbacked.amount = event.params.amount
  backUnbacked.fee = event.params.fee

  backUnbacked.blockNumber = event.block.number
  backUnbacked.blockTimestamp = event.block.timestamp
  backUnbacked.transactionHash = event.transaction.hash

  backUnbacked.save()

  let user = User.load(event.params.backer);
  if (!user) {
    user = new User(event.params.backer);
    user.save();
  }
}

export function handleBorrow(event: BorrowEvent): void {
  let borrow = new Borrow(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  borrow.reserve = event.params.reserve
  borrow.user = event.params.user
  borrow.onBehalfOf = event.params.onBehalfOf
  borrow.amount = event.params.amount
  borrow.interestRateMode = event.params.interestRateMode
  borrow.borrowRate = event.params.borrowRate
  borrow.referralCode = event.params.referralCode

  borrow.blockNumber = event.block.number
  borrow.blockTimestamp = event.block.timestamp
  borrow.transactionHash = event.transaction.hash

  borrow.save()

  let user = User.load(event.params.user);
  if (!user) {
    user = new User(event.params.user);
    user.save();
  }
}

export function handleFlashLoan(event: FlashLoanEvent): void {
  let entity = new FlashLoan(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.target = event.params.target
  entity.initiator = event.params.initiator
  entity.asset = event.params.asset
  entity.amount = event.params.amount
  entity.interestRateMode = event.params.interestRateMode
  entity.premium = event.params.premium
  entity.referralCode = event.params.referralCode

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let user = User.load(event.params.initiator);
  if (!user) {
    user = new User(event.params.initiator);
    user.save();
  }
}

export function handleLiquidationCall(event: LiquidationCallEvent): void {
  let entity = new LiquidationCall(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collateralAsset = event.params.collateralAsset
  entity.debtAsset = event.params.debtAsset
  entity.user = event.params.user
  entity.debtToCover = event.params.debtToCover
  entity.liquidatedCollateralAmount = event.params.liquidatedCollateralAmount
  entity.liquidator = event.params.liquidator
  entity.receiveAToken = event.params.receiveAToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let user = User.load(event.params.user);
  if (!user) {
    user = new User(event.params.user);
    user.save();
  }
}

export function handleMintUnbacked(event: MintUnbackedEvent): void {
  let entity = new MintUnbacked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.reserve = event.params.reserve
  entity.user = event.params.user
  entity.onBehalfOf = event.params.onBehalfOf
  entity.amount = event.params.amount
  entity.referralCode = event.params.referralCode

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let user = User.load(event.params.user);
  if (!user) {
    user = new User(event.params.user);
    user.save();
  }
}

export function handleRebalanceStableBorrowRate(
  event: RebalanceStableBorrowRateEvent
): void {
  let entity = new RebalanceStableBorrowRate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.reserve = event.params.reserve
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let user = User.load(event.params.user);
  if (!user) {
    user = new User(event.params.user);
    user.save();
  }
}

export function handleRepay(event: RepayEvent): void {
  let entity = new Repay(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.reserve = event.params.reserve
  entity.user = event.params.user
  entity.repayer = event.params.repayer
  entity.amount = event.params.amount
  entity.useATokens = event.params.useATokens

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let user = User.load(event.params.user);
  if (!user) {
    user = new User(event.params.user);
    user.save();
  }
}

export function handleSupply(event: SupplyEvent): void {
  let entity = new Supply(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.reserve = event.params.reserve
  entity.user = event.params.user
  entity.onBehalfOf = event.params.onBehalfOf
  entity.amount = event.params.amount
  entity.referralCode = event.params.referralCode

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
  
  let user = User.load(event.params.user);
  if (!user) {
    user = new User(event.params.user);
    user.save();
  }
}

export function handleSwapBorrowRateMode(event: SwapBorrowRateModeEvent): void {
  let entity = new SwapBorrowRateMode(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.reserve = event.params.reserve
  entity.user = event.params.user
  entity.interestRateMode = event.params.interestRateMode

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let user = User.load(event.params.user);
  if (!user) {
    user = new User(event.params.user);
    user.save();
  }
}

export function handleUserEModeSet(event: UserEModeSetEvent): void {
  let entity = new UserEModeSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.categoryId = event.params.categoryId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let user = User.load(event.params.user);
  if (!user) {
    user = new User(event.params.user);
    user.save();
  }
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.reserve = event.params.reserve
  entity.user = event.params.user
  entity.to = event.params.to
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
}
