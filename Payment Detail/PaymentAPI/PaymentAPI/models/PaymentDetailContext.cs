using Microsoft.EntityFrameworkCore;

namespace PaymentAPI.models
{
    public class PaymentDetailContext : DbContext
    {
        public PaymentDetailContext(DbContextOptions options) : base(options) 
        {
        }
        public DbSet<PaymentDetail> PaymentDetails { get; set; }
    }
}
