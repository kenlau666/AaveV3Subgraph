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
  let backUnbacked = BackUnbacked.load(event.transaction.hash.toString());
  if (!backUnbacked){  
    let backUnbacked = new BackUnbacked(event.transaction.hash.toString());
    backUnbacked.reserve = event.params.reserve
    backUnbacked.backer = event.params.backer.toHexString()
    backUnbacked.amount = event.params.amount
    backUnbacked.fee = event.params.fee

    backUnbacked.blockNumber = event.block.number
    backUnbacked.blockTimestamp = event.block.timestamp
    backUnbacked.transactionHash = event.transaction.hash

    backUnbacked.save()
  }

  let user = User.load(event.params.backer.toHexString());
  if (!user) {
    user = new User(event.params.backer.toHexString());
    user.save();
  }
}

export function handleBorrow(event: BorrowEvent): void {
  let borrow = Borrow.load(event.transaction.hash.toString());
  if (!borrow){  
    let borrow = new Borrow(
      event.transaction.hash.toString()
    )
  
    borrow.reserve = event.params.reserve
    borrow.user = event.params.user.toHexString()
    borrow.onBehalfOf = event.params.onBehalfOf
    borrow.amount = event.params.amount
    borrow.interestRateMode = event.params.interestRateMode
    borrow.borrowRate = event.params.borrowRate
    borrow.referralCode = event.params.referralCode
  
    borrow.blockNumber = event.block.number
    borrow.blockTimestamp = event.block.timestamp
    borrow.transactionHash = event.transaction.hash
  
    borrow.save()
  }


  let user = User.load(event.params.user.toHexString());
  if (!user) {
    user = new User(event.params.user.toHexString());
    user.save();
  }
}

export function handleFlashLoan(event: FlashLoanEvent): void {
  let entity = FlashLoan.load(event.transaction.hash.toString());
  if (!entity){   
    let entity = new FlashLoan(
      event.transaction.hash.toString()
    )
    entity.target = event.params.target
    entity.initiator = event.params.initiator.toHexString()
    entity.asset = event.params.asset
    entity.amount = event.params.amount
    entity.interestRateMode = event.params.interestRateMode
    entity.premium = event.params.premium
    entity.referralCode = event.params.referralCode

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
  }

  let user = User.load(event.params.initiator.toHexString());
  if (!user) {
    user = new User(event.params.initiator.toHexString());
    user.save();
  }
}

export function handleLiquidationCall(event: LiquidationCallEvent): void {
  let entity = LiquidationCall.load(event.transaction.hash.toString());
  if (!entity){   
    let entity = new LiquidationCall(
      event.transaction.hash.toString()
    )
    entity.collateralAsset = event.params.collateralAsset
    entity.debtAsset = event.params.debtAsset
    entity.user = event.params.user.toHexString()
    entity.debtToCover = event.params.debtToCover
    entity.liquidatedCollateralAmount = event.params.liquidatedCollateralAmount
    entity.liquidator = event.params.liquidator
    entity.receiveAToken = event.params.receiveAToken
  
    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash
  
    entity.save()
  }

  let user = User.load(event.params.user.toHexString());
  if (!user) {
    user = new User(event.params.user.toHexString());
    user.save();
  }
}

export function handleMintUnbacked(event: MintUnbackedEvent): void {
  let entity = MintUnbacked.load(event.transaction.hash.toString());
  if (!entity){   
    let entity = new MintUnbacked(
      event.transaction.hash.toString()
    )
    entity.reserve = event.params.reserve
    entity.user = event.params.user.toHexString()
    entity.onBehalfOf = event.params.onBehalfOf
    entity.amount = event.params.amount
    entity.referralCode = event.params.referralCode
  
    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash
  
    entity.save()

    entity.save()
  }

  let user = User.load(event.params.user.toHexString());
  if (!user) {
    user = new User(event.params.user.toHexString());
    user.save();
  }
}

export function handleRebalanceStableBorrowRate(
  event: RebalanceStableBorrowRateEvent
): void {
  let entity = RebalanceStableBorrowRate.load(event.transaction.hash.toString());
  if (!entity){   
    let entity = new RebalanceStableBorrowRate(
      event.transaction.hash.toString()
    )
    entity.reserve = event.params.reserve
    entity.user = event.params.user.toHexString()
  
    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash
  
    entity.save()
  }

  let user = User.load(event.params.user.toHexString());
  if (!user) {
    user = new User(event.params.user.toHexString());
    user.save();
  }
}

export function handleRepay(event: RepayEvent): void {
  let entity = Repay.load(event.transaction.hash.toString());
  if (!entity){   
    let entity = new Repay(
      event.transaction.hash.toString()
    )
    entity.reserve = event.params.reserve
    entity.user = event.params.user.toHexString()
    entity.repayer = event.params.repayer
    entity.amount = event.params.amount
    entity.useATokens = event.params.useATokens
  
    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash
  
    entity.save()
  }

  let user = User.load(event.params.user.toHexString());
  if (!user) {
    user = new User(event.params.user.toHexString());
    user.save();
  }
}

export function handleSupply(event: SupplyEvent): void {
  let entity = Supply.load(event.transaction.hash.toString());
  if (!entity){   
    let entity = new Supply(
      event.transaction.hash.toString()
    )
    entity.reserve = event.params.reserve
    entity.user = event.params.user.toHexString()
    entity.onBehalfOf = event.params.onBehalfOf
    entity.amount = event.params.amount
    entity.referralCode = event.params.referralCode
  
    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash
  
    entity.save()
  }
  
  let user = User.load(event.params.user.toHexString());
  if (!user) {
    user = new User(event.params.user.toHexString());
    user.save();
  }
}

export function handleSwapBorrowRateMode(event: SwapBorrowRateModeEvent): void {
  let entity = SwapBorrowRateMode.load(event.transaction.hash.toString());
  if (!entity){   
    let entity = new SwapBorrowRateMode(
      event.transaction.hash.toString()
    )
    entity.reserve = event.params.reserve
    entity.user = event.params.user.toHexString()
    entity.interestRateMode = event.params.interestRateMode
  
    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash
  
    entity.save()
  }

  let user = User.load(event.params.user.toHexString());
  if (!user) {
    user = new User(event.params.user.toHexString());
    user.save();
  }
}

export function handleUserEModeSet(event: UserEModeSetEvent): void {
  let entity = UserEModeSet.load(event.transaction.hash.toString());
  if (!entity){   
    let entity = new UserEModeSet(
      event.transaction.hash.toString()
    )
    entity.user = event.params.user.toHexString()
    entity.categoryId = event.params.categoryId
  
    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash
  
    entity.save()
  }

  let user = User.load(event.params.user.toHexString());
  if (!user) {
    user = new User(event.params.user.toHexString());
    user.save();
  }
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = Withdraw.load(event.transaction.hash.toString());
  if (!entity){   
    let entity = new Withdraw(
      event.transaction.hash.toString()
    )
    entity.reserve = event.params.reserve
    entity.user = event.params.user.toHexString()
    entity.to = event.params.to
    entity.amount = event.params.amount
  
    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash
  
    entity.save()
  }

  let user = User.load(event.params.user.toHexString());
  if (!user) {
    user = new User(event.params.user.toHexString());
    user.save();
  }
}
