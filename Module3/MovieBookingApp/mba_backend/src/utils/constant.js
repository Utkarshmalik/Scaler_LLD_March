

const languageTypes={
    english :"ENGLISH",
    hindi:"HINDI",
    tamil:"TAMIL"
}

const releaseStatusTypes={
    released:"RELEASED",
    unReleased:"UNRELEASED",
    blocked:"BLOCKED"
}

const userTypes={
    customer:"CUSTOMER",
    client:"CLIENT",
    admin:"ADMIN"
}

const userStatus={
    pending:"PENDING",
    blocked:"BLOCKED",
    approved:"APPROVED"
}

const bookingStatus={
    inProgress:"IN_PROGRESS",
    completed:"COMPLETED",
    failed:"FAILED",
    cancelled:"CANCELLED",
    expired:"EXPIRED"
}

const paymentStatus= {
    pending:"PENDING",
    success:"SUCCESS",
    failed:"FAILED"
}


module.exports={
    languageTypes,
    releaseStatusTypes,
    userTypes,
    userStatus,
    bookingStatus,
    paymentStatus
}