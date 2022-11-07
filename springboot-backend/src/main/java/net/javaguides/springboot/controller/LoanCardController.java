package net.javaguides.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

import javax.persistence.Id;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.LoanCard;
import net.javaguides.springboot.repository.LoanCardRepository;
import net.javaguides.springboot.service.LoanCarddetails;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/")
public class LoanCardController {

		@Autowired
		private LoanCardRepository loancardRepository;

		@GetMapping("/loancards")
		public List<LoanCard> getAllLoanCards(){
			return loancardRepository.findAll();
		}
		
		@PostMapping("/loancards")
		public LoanCard createLoanCard(@RequestBody LoanCard loan_card) {
			return loancardRepository.save(loan_card);
		}

		@Autowired
		private LoanCarddetails loan_details;
		
		@GetMapping("/loacards/{loan_id}")
		public Optional<LoanCard> getLoanById(@PathVariable("loan_id") String loan_id){
			return loan_details.getLoanById(loan_id);
		}
		
}
